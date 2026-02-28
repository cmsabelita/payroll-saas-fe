"use client";

import { Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { BulkActionBarProps } from "./BulkActionBar.types";

export function BulkActionBar({
  selectedCount,
  primaryAction,
  secondaryAction,
  onClear,
  clearLabel = "Clear selection",
  className,
}: BulkActionBarProps) {
  return (
    <div
      className={cn(
        "sticky bottom-0 flex flex-wrap items-center justify-between gap-3 border-t border-border bg-background px-5 py-3",
        className
      )}
      role="region"
      aria-label="Bulk actions"
    >
      <Text variant="label" as="span" className="text-muted-foreground">
        {selectedCount} selected
      </Text>
      <div className="flex items-center gap-2">
        {primaryAction}
        {secondaryAction != null && secondaryAction}
        <button
          type="button"
          onClick={onClear}
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          {clearLabel}
        </button>
      </div>
    </div>
  );
}
