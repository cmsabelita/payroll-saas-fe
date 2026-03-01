"use client";

import { FaIcon, Input, Select } from "@/components/atoms";
import { cn } from "@/utils";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import type { ComplianceDisciplinaryToolbarProps } from "./ComplianceDisciplinaryToolbar.types";

export function ComplianceDisciplinaryToolbar({
  searchValue,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  statusOptions,
  onIssueNteClick,
  className,
}: ComplianceDisciplinaryToolbarProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-between gap-4", className)}>
      <div className="flex flex-wrap items-center gap-2">
        <Input
          placeholder="Search employee or case #..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-64 min-w-0"
          size="md"
        />
        <div className="w-40 min-w-0">
          <Select
            options={statusOptions}
            value={statusFilter}
            onChange={(e) => onStatusFilterChange(e.target.value)}
            size="md"
          />
        </div>
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:brightness-110"
        onClick={onIssueNteClick}
      >
        <FaIcon icon={faPlus} size="sm" aria-hidden />
        Issue NTE
      </button>
    </div>
  );
}
