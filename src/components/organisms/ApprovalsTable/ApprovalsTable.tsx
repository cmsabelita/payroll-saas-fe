"use client";

import { Card } from "@/components/molecules/Card";
import { cn } from "@/utils";
import type { ApprovalsTableProps } from "./ApprovalsTable.types";

export function ApprovalsTable({
  kpiStrip,
  tabFilter,
  toolbar,
  children,
  bulkActionBar,
  pagination,
  className,
}: ApprovalsTableProps) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {kpiStrip != null && kpiStrip}
      <Card className="overflow-hidden rounded-xl border border-border">
        {(tabFilter != null || toolbar != null) && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 pb-3 pt-3.5">
            {tabFilter != null && tabFilter}
            {toolbar != null && <div className="flex items-center gap-2 pb-0">{toolbar}</div>}
          </div>
        )}
        <div className="overflow-x-auto">{children}</div>
        {bulkActionBar != null && bulkActionBar}
        {pagination != null && (
          <div className="flex items-center justify-between border-t border-border px-4 py-3">
            {pagination}
          </div>
        )}
      </Card>
    </div>
  );
}
