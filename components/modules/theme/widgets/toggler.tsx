"use client";

import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useMounted } from "@/hooks/use-mounted";
import { useTheme } from "next-themes";

export function ThemeToggler() {
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <div className="flex space-x-2">
        <Skeleton className="w-8 h-8 rounded-full" />
        <Skeleton className="w-8 h-8 rounded-full" />
        <Skeleton className="w-8 h-8 rounded-full" />
      </div>
    );
  }

  return (
    <div className="flex space-x-3 m-0">
      <Button
        variant={theme === "dark" ? "default" : "outline"}
        className="h-10 w-full min-w-fit rounded-sm"
        onClick={() => setTheme("dark")}
      >
        <Moon size={15} />
      </Button>
      <Button
        variant={theme === "light" ? "default" : "outline"}
        className="h-10 w-full rounded-sm"
        onClick={() => setTheme("light")}
      >
        <Sun size={15} />
      </Button>
      <Button
        variant={theme === "system" ? "default" : "outline"}
        className="h-10 w-full rounded-sm"
        onClick={() => setTheme("system")}
      >
        <Monitor size={15} />
      </Button>
    </div>
  );
}
