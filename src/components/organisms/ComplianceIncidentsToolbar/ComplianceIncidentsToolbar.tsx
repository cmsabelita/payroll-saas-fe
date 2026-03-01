"use client";

import { FaIcon, Input } from "@/components/atoms";
import { cn } from "@/utils";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import type { ComplianceIncidentsToolbarProps } from "./ComplianceIncidentsToolbar.types";

export function ComplianceIncidentsToolbar({
  searchValue,
  onSearchChange,
  onAddClick,
  className,
}: ComplianceIncidentsToolbarProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-between gap-4", className)}>
      <Input
        placeholder="Search incidents..."
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-64 min-w-0"
        size="md"
      />
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:brightness-110"
        onClick={onAddClick}
      >
        <FaIcon icon={faPlus} size="sm" aria-hidden />
        Report Incident
      </button>
    </div>
  );
}
