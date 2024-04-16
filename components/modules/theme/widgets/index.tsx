import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggler } from "..";

export const ThemeWidget = React.memo(() => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            data-umami-event="theme-toggle"
            className="w-10 h-10 relative "
            aria-label="Toggle theme"
          >
            <Moon
              size={15}
              className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Sun
              size={15}
              className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span className="sr-only">Theme Widget</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-auto p-3 bg-background"
          align="center"
        >
          <ThemeToggler />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
});
ThemeWidget.displayName = "ThemeWidget";
