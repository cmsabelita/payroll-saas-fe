"use client";

import { Card } from "@/components/molecules/Card";
import { cn } from "@/utils";
import type { EmployeeDataTableProps } from "./EmployeeDataTable.types";

export function EmployeeDataTable({
  tabFilter,
  toolbar,
  children,
  pagination,
  emptyState,
  className,
}: EmployeeDataTableProps) {
  return (
    <Card className={cn("overflow-hidden rounded-xl border border-border", className)}>
      {tabFilter != null && (
        <div className="border-b border-border px-4 pb-0 pt-3.5">{tabFilter}</div>
      )}
      {toolbar != null && (
        <div className="flex flex-wrap items-center gap-3 border-b border-border px-4 py-3">
          {toolbar}
        </div>
      )}
      <div className="overflow-x-auto">{children}</div>
      {pagination != null && (
        <div className="flex items-center justify-between border-t border-border px-4 py-3">
          {pagination}
        </div>
      )}
      {emptyState != null && emptyState}
    </Card>
  );
}
