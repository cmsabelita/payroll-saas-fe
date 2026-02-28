"use client";

import { cn } from "@/utils";
import type { SettingsLayoutProps } from "./SettingsLayout.types";

export function SettingsLayout({
  nav,
  children,
  className,
}: SettingsLayoutProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:gap-6",
        className
      )}
    >
      <aside
        className="w-full shrink-0 lg:w-48"
        aria-label="Settings navigation"
      >
        {nav}
      </aside>
      <main className="min-w-0 flex-1 max-w-2xl space-y-5">{children}</main>
    </div>
  );
}
