"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icon } from "../Icon";
import { cn } from "@/utils";
import type { ThemeToggleProps } from "./ThemeToggle.types";

const TRACK_PADDING = "0.375rem"; /* p-1.5 */
const THUMB_SIZE = "1.5rem"; /* 24px — fits inside track with padding */

function SunIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  );
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  const isDark = (resolvedTheme ?? theme) === "dark";

  const handleClick = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <div
        className={cn(
          "inline-flex h-9 w-[4.5rem] shrink-0 items-center justify-center rounded-full border border-border bg-muted",
          className
        )}
        aria-hidden
        title="Theme (loading…)"
      >
        <span
          className="rounded-full bg-muted-foreground/20"
          style={{ width: THUMB_SIZE, height: THUMB_SIZE }}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Switch to dark or light mode"
      className={cn(
        "relative inline-flex h-9 w-[4.5rem] shrink-0 cursor-pointer items-center rounded-full border border-border bg-muted p-1.5 outline-none transition-colors",
        "hover:bg-muted/80",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      onClick={handleClick}
    >
      {/* Sliding thumb: card-style pill with the active icon inside — always high contrast */}
      <span
        className={cn(
          "absolute top-1.5 flex items-center justify-center rounded-full border border-border bg-card text-card-foreground shadow-sm transition-[left] duration-200 ease-out"
        )}
        style={{
          width: THUMB_SIZE,
          height: THUMB_SIZE,
          left: isDark
            ? `calc(100% - ${THUMB_SIZE} - ${TRACK_PADDING})`
            : TRACK_PADDING,
        }}
      >
        <Icon size="sm" className="text-card-foreground" aria-hidden>
          {isDark ? <MoonIcon /> : <SunIcon />}
        </Icon>
      </span>
    </button>
  );
}
