"use client";

import { Button, FaIcon, Text } from "@/components/atoms";
import { cn } from "@/utils";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import type { ReportHeadcountSectionProps } from "./ReportHeadcountSection.types";

export function ReportHeadcountSection({
  periodOptions,
  selectedPeriod,
  onPeriodChange,
  onExportExcel,
  totalHeadcount,
  newHires,
  separations,
  turnoverRate,
  rows,
  className,
}: ReportHeadcountSectionProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <select
          className="w-40 rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
          value={selectedPeriod}
          onChange={(e) => onPeriodChange(e.target.value)}
        >
          {periodOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        {onExportExcel && (
          <Button variant="secondary" size="md" onClick={onExportExcel} className="gap-2">
            <FaIcon icon={faFileExcel} size="sm" aria-hidden />
            Export Excel
          </Button>
        )}
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-xl border border-border bg-card p-5">
          <Text variant="caption" as="p" className="text-muted-foreground">Total Headcount</Text>
          <Text variant="body" as="p" className="mt-1 text-xl font-bold text-foreground">{totalHeadcount}</Text>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <Text variant="caption" as="p" className="text-muted-foreground">New Hires</Text>
          <Text variant="body" as="p" className="mt-1 text-xl font-bold text-primary">{newHires}</Text>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <Text variant="caption" as="p" className="text-muted-foreground">Separations</Text>
          <Text variant="body" as="p" className="mt-1 text-xl font-bold text-destructive">{separations}</Text>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <Text variant="caption" as="p" className="text-muted-foreground">Turnover Rate</Text>
          <Text variant="body" as="p" className="mt-1 text-xl font-bold text-foreground">{turnoverRate}</Text>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="border-b border-border px-4 py-3">
          <Text variant="body" as="h2" className="font-semibold text-foreground">Headcount by Department — {selectedPeriod}</Text>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border bg-muted/30">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Department</th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">Headcount</th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">New Hires</th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">Separations</th>
                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">Turnover</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((r) => (
                <tr key={r.department} className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">{r.department}</td>
                  <td className="px-4 py-3 text-center text-sm text-foreground">{r.headcount}</td>
                  <td className="px-4 py-3 text-center text-sm text-foreground">{r.newHires}</td>
                  <td className="px-4 py-3 text-center text-sm text-foreground">{r.separations}</td>
                  <td className="px-4 py-3 text-right text-sm text-muted-foreground">{r.turnoverRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
