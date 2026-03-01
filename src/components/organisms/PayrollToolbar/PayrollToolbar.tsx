"use client";

import { FaIcon } from "@/components/atoms";
import { TabFilter } from "@/components/molecules/TabFilter";
import { cn } from "@/utils";
import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import type { PayrollToolbarProps } from "./PayrollToolbar.types";

export function PayrollToolbar({
  statusTab,
  onStatusTabChange,
  tabs,
  yearLabel,
  onYearFilterClick,
  onNewPeriodClick,
  className,
}: PayrollToolbarProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 border-b border-border px-4 py-3",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">All Periods</h2>
        <div className="flex items-center gap-2">
          {yearLabel != null && (
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted/80"
              onClick={onYearFilterClick}
            >
              <FaIcon icon={faFilter} size="xs" aria-hidden />
              Filter by year
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <TabFilter
          tabs={tabs}
          value={statusTab}
          onChange={onStatusTabChange}
          className="rounded-xl bg-muted p-2"
        />
        <button
          type="button"
          className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:brightness-110"
          onClick={onNewPeriodClick}
        >
          <FaIcon icon={faPlus} size="sm" aria-hidden />
          New Period
        </button>
      </div>
    </div>
  );
}
