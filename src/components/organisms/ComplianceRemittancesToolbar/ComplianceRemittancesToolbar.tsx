"use client";

import { FaIcon } from "@/components/atoms";
import { cn } from "@/utils";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import type { ComplianceRemittancesToolbarProps } from "./ComplianceRemittancesToolbar.types";

export function ComplianceRemittancesToolbar({
  periodOptions,
  selectedPeriod,
  onPeriodChange,
  onAddClick,
  className,
}: ComplianceRemittancesToolbarProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-between gap-4", className)}>
      <select
        className="w-40 rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
        value={selectedPeriod}
        onChange={(e) => onPeriodChange(e.target.value)}
      >
        {periodOptions.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {onAddClick && (
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:brightness-110"
          onClick={onAddClick}
        >
          <FaIcon icon={faPlus} size="sm" aria-hidden />
          New Remittance
        </button>
      )}
    </div>
  );
}
