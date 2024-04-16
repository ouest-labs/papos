"use client";

import * as React from "react";

import { Eye, EyeOffIcon } from "lucide-react";

import { Show } from "@/hooks/show";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { cva } from "class-variance-authority";
import useMediaQuery from "@/hooks/use-media-query";

export const inputVariants = cva(
  cn(
    "border-input border placeholder:font-light bg-transparent ring-offset-background peer",
    "focus-visible:ring-transparent focus-visible:border-main flex w-full file:border-0 file:bg-transparent",
    "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
  ),
  {
    variants: {
      variant: {
        default: "bg-background",
        filled: "bg-background",
      },
      size: {
        sm: "h-11 px-3 py-2 text-sm rounded-sm file:text-sm file:font-medium",
        default: "h-10 px-3 text-sm rounded-lg file:text-sm file:font-medium",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  errorClassName?: string;
  suffix?: any;
  fullWidth?: boolean;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = "default",
      fullWidth,
      size,
      label,
      type,
      suffix,
      id,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = React.useState(false);
    const { isMobile } = useMediaQuery();
    return (
      <div className={cn("relative", fullWidth && "w-full")}>
        <p
          className="prose-sm prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-orangen text-foreground/50 transition-colors"
          dangerouslySetInnerHTML={{ __html: label || "" }}
        />
        <input
          id={id}
          type={type === "password" ? (show ? "text" : "password") : type}
          className={cn(
            inputVariants({ variant, size, className }),
            "placeholder:text-foreground/50 focus:outline-none focus:border-foreground focus:ring-border focus:ring-[0.5px] outline-none disabled:cursor-not-allowed disabled:opacity-50"
          )}
          autoFocus={!isMobile}
          ref={ref}
          {...props}
        />
        <Show when={type !== "password"}>
          {suffix && (
            <div className="absolute right-[10px] top-1/2 -translate-y-1/2">
              {suffix}
            </div>
          )}
        </Show>
        <Show when={type === "password"}>
          <div
            onClick={() => setShow(!show)}
            className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {show ? <Eye height={20} /> : <EyeOffIcon height={20} />}
          </div>
        </Show>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
