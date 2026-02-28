"use client";

import { Card } from "@/components/molecules/Card";
import { cn } from "@/utils";
import type { PayrollStatusTableProps } from "./PayrollStatusTable.types";

export function PayrollStatusTable({
  tabFilter,
  children,
  pagination,
  className,
}: PayrollStatusTableProps) {
  return (
    <Card className={cn("overflow-hidden rounded-xl border border-border", className)}>
      {tabFilter != null && (
        <div className="border-b border-border px-4 pt-3.5 pb-0">{tabFilter}</div>
      )}
      <div className="overflow-x-auto">{children}</div>
      {pagination != null && (
        <div className="flex items-center justify-between border-t border-border px-4 py-3">
          {pagination}
        </div>
      )}
    </Card>
  );
}
