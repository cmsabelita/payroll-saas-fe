"use client";

import { Text, ThemeToggle } from "@/components/atoms";
import { cn } from "@/utils";
import type { AppTopbarProps } from "./AppTopbar.types";

export function AppTopbar({
  title,
  subtitle,
  primaryAction,
  dateRangeTrigger,
  trailing,
  className,
}: AppTopbarProps) {
  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center justify-between gap-4 border-b border-border-subtle bg-card px-4 sm:px-6",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <Text as="h1" variant="heading" className="text-base font-semibold text-foreground sm:text-lg">
          {title}
        </Text>
        {subtitle != null && subtitle !== "" && (
          <Text variant="caption" as="p" className="text-xs leading-none text-muted-foreground">
            {subtitle}
          </Text>
        )}
      </div>
      <div className="flex flex-shrink-0 items-center gap-2 sm:gap-4">
        {primaryAction != null && primaryAction}
        {dateRangeTrigger != null && dateRangeTrigger}
        <div className="flex items-center gap-2">
          <ThemeToggle className="shrink-0" />
          {trailing != null && trailing}
        </div>
      </div>
    </header>
  );
}
