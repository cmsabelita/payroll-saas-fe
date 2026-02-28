"use client";

import { Button, Link, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { RequestFormCardProps } from "./RequestFormCard.types";

export function RequestFormCard({
  title,
  children,
  submitLabel,
  onSubmit,
  onCancel,
  cancelHref,
  cancelLabel = "Cancel",
  hint,
  isLoading = false,
  className,
}: RequestFormCardProps) {
  const showCancel = onCancel != null || cancelHref != null;
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-background p-6",
        className
      )}
    >
      <Text as="h1" variant="label" className="mb-5 text-base font-semibold text-foreground">
        {title}
      </Text>
      <form onSubmit={onSubmit} className="space-y-4">
        {children}
        <div className="mt-6 flex gap-3 border-t border-border pt-5">
          {onCancel != null && (
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="border-border bg-background"
            >
              {cancelLabel}
            </Button>
          )}
          {onCancel == null && cancelHref != null && (
            <Link href={cancelHref} variant="muted" className="flex items-center px-4 py-2.5 text-sm font-medium">
              {cancelLabel}
            </Link>
          )}
          <Button type="submit" className={showCancel ? "flex-1" : "w-full"} disabled={isLoading}>
            {isLoading ? "Submitting…" : submitLabel}
          </Button>
        </div>
        {hint != null && (
          <Text variant="caption" as="p" className="mt-3 text-center text-muted-foreground">
            {hint}
          </Text>
        )}
      </form>
    </div>
  );
}
