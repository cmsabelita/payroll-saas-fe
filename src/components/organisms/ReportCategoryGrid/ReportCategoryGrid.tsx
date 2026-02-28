"use client";

import { cn } from "@/utils";
import type { ReportCategoryGridProps } from "./ReportCategoryGrid.types";

export function ReportCategoryGrid({
  children,
  className,
}: ReportCategoryGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
      role="list"
    >
      {children}
    </div>
  );
}
