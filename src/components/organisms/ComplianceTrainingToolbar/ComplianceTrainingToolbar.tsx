"use client";

import { FaIcon, Input } from "@/components/atoms";
import { cn } from "@/utils";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import type { ComplianceTrainingToolbarProps } from "./ComplianceTrainingToolbar.types";

export function ComplianceTrainingToolbar({
  searchValue,
  onSearchChange,
  typeFilter,
  onTypeFilterChange,
  typeOptions,
  onAddTrainingClick,
  className,
}: ComplianceTrainingToolbarProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-between gap-4", className)}>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110"
        onClick={onAddTrainingClick}
      >
        <FaIcon icon={faPlus} size="sm" aria-hidden />
        Add Training
      </button>
      <div className="ml-auto flex flex-wrap items-center gap-2">
        <Input
          placeholder="Search training..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-52 min-w-0"
          size="md"
        />
        <div className="w-36 min-w-0">
          <select
            className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
            value={typeFilter}
            onChange={(e) => onTypeFilterChange(e.target.value)}
          >
            {typeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
