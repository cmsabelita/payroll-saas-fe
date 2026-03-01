"use client";

import { Button, FaIcon, Text } from "@/components/atoms";
import { cn } from "@/utils";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import type { ReportLeaveSectionProps } from "./ReportLeaveSection.types";

export function ReportLeaveSection({
  periodOptions,
  departmentOptions,
  selectedPeriod,
  selectedDepartment,
  onPeriodChange,
  onDepartmentChange,
  onExportExcel,
  totalRequests,
  approved,
  pending,
  denied,
  rows,
  className,
}: ReportLeaveSectionProps) {
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
        <select
          className="w-44 rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
          value={selectedDepartment}
          onChange={(e) => onDepartmentChange(e.target.value)}
        >
          {departmentOptions.map((o) => (
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
        <div className="rounded-xl border border-border bg-card p-4">
          <Text variant="caption" as="p" className="text-muted-foreground">Total Requests</Text>
          <Text variant="body" as="p" className="mt-1 text-xl font-bold text-foreground">{totalRequests}</Text>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <Text variant="caption" as="p" className="text-muted-foreground">Approved</Text>
          <Text variant="body" as="p" className="mt-1 text-xl font-bold text-primary">{approved}</Text>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <Text variant="caption" as="p" className="text-muted-foreground">Pending</Text>
          <Text variant="body" as="p" className="mt-1 text-xl font-bold text-amber-600">{pending}</Text>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <Text variant="caption" as="p" className="text-muted-foreground">Denied</Text>
          <Text variant="body" as="p" className="mt-1 text-xl font-bold text-destructive">{denied}</Text>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="border-b border-border px-5 py-3.5">
          <Text variant="body" as="h2" className="font-semibold text-foreground">Leave Summary — {selectedPeriod}</Text>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border bg-muted/30">
              <tr>
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Employee</th>
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Department</th>
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Leave Type</th>
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Start</th>
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">End</th>
                <th className="px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">Days</th>
                <th className="px-4 py-2.5 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">{r.employee}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{r.department}</td>
                  <td className="px-4 py-3 text-sm text-foreground">{r.leaveType}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{r.startDate}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{r.endDate}</td>
                  <td className="px-4 py-3 text-center text-sm text-foreground">{r.days}</td>
                  <td className="px-4 py-3 text-right text-sm text-muted-foreground">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
