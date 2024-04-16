"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";

import { Dispatch, ReactNode, SetStateAction } from "react";

import { Drawer } from "vaul";
import useMediaQuery from "@/hooks/use-media-query";

export function Popover({
  children,
  content,
  align = "center",
  openPopover,
  setOpenPopover,
  mobileOnly,
}: {
  children: ReactNode;
  content: ReactNode | string;
  align?: "center" | "start" | "end";
  openPopover: boolean;
  setOpenPopover: Dispatch<SetStateAction<boolean>>;
  mobileOnly?: boolean;
}) {
  const { isMobile } = useMediaQuery();

  if (mobileOnly || isMobile) {
    return (
      <Drawer.Root open={openPopover} onOpenChange={setOpenPopover}>
        <Drawer.Trigger className="sm:hidden outline-none" asChild>
          {children}
        </Drawer.Trigger>
        <Drawer.Overlay className="fixed inset-0 z-50 backdrop-blur-sm" />
        <Drawer.Portal>
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-24 rounded-t-[10px] border-t text-base outline-none ">
            <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-background">
              <div className="my-3 h-1 w-12 rounded-full bg-muted " />
            </div>
            <div className="flex min-h-[150px] w-full items-center justify-center overflow-hidden  bg-background pb-8 align-middle shadow-xl">
              {content}
            </div>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <PopoverPrimitive.Root open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverPrimitive.Trigger className="sm:inline-flex" asChild>
        {children}
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          sideOffset={8}
          align={align}
          className="animate-slide-up-fade z-50 items-center rounded-md backdrop-blur-sm bg-background border drop-shadow-lg sm:block text-base"
        >
          {content}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}