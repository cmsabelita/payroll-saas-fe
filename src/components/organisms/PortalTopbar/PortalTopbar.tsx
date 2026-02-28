"use client";

import { cn } from "@/utils";
import type { PortalTopbarProps } from "./PortalTopbar.types";

export function PortalTopbar({
  logo,
  tabs,
  trailing,
  className,
}: PortalTopbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-10 flex h-14 items-center gap-6 border-b border-border bg-background px-4 sm:px-6",
        className
      )}
    >
      <div className="flex min-w-0 shrink-0 items-center gap-2">{logo}</div>
      {tabs != null && (
        <nav className="flex min-w-0 flex-1 items-center gap-1" aria-label="Portal navigation">
          {tabs}
        </nav>
      )}
      {trailing != null && (
        <div className="flex shrink-0 items-center gap-3">{trailing}</div>
      )}
    </header>
  );
}
