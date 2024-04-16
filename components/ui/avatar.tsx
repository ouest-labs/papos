import Image from "next/image";
import { cn } from "@/lib/cn";

export function Avatar({
  user = {},
  className,
}: {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
  className?: string;
}) {
  if (!user) {
    return (
      <div
        className={cn(
          "h-10 w-10 animate-pulse rounded-lg border border-lime-500",
          className,
        )}
      />
    );
  }
  return (
    <Image
      alt={`Avatar de ${user?.name || user?.email}`}
      width={40}
      height={40}
      referrerPolicy="no-referrer"
      unoptimized
      src={
        user?.image ||
        `https://api.dicebear.com/8.x/notionists/png?seed=${user?.email}`
      }
      className={cn("rounded-lg border", className)}
      draggable={false}
    />
  );
}