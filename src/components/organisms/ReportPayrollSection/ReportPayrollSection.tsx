"use client";

import { Button, FaIcon, Text } from "@/components/atoms";
import { cn } from "@/utils";
import { faFileExcel, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import type { ReportPayrollSectionProps } from "./ReportPayrollSection.types";

export function ReportPayrollSection({
  yearOptions,
  monthOptions,
  departmentOptions,
  selectedYear,
  selectedMonth,
  selectedDepartment,
  onYearChange,
  onMonthChange,
  onDepartmentChange,
  onExportExcel,
  onExportPdf,
  totalPayrollYtd,
  avgMonthly,
  totalEmployees,
  taxWithheldYtd,
  periodLabel = "Jan–Apr 2024",
  monthlyData = [],
  className,
}: ReportPayrollSectionProps) {
  const maxVal = Math.max(...monthlyData.map((d) => d.value), 1);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <select
          className="w-28 rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
        >
          {yearOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <select
          className="w-36 rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
          value={selectedMonth}
          onChange={(e) => onMonthChange(e.target.value)}
        >
          {monthOptions.map((o) => (
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
        {onExportPdf && (
          <Button variant="secondary" size="md" onClick={onExportPdf} className="gap-2">
            <FaIcon icon={faFilePdf} size="sm" aria-hidden />
            Export PDF
          </Button>
        )}
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-xl border border-border bg-card p-4">
          <Text variant="caption" as="p" className="text-muted-foreground">Total Payroll YTD</Text>
          <Text variant="body" as="p" className="mt-1 text-xl font-bold text-foreground">{totalPayrollYtd}</Text>
          <Text variant="caption" as="p" className="mt-1 text-primary">{periodLabel}</Text>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <Text variant="caption" as="p" className="text-muted-foreground">Avg Monthly</Text>
          <Text variant="body" as="p" className="mt-1 text-xl font-bold text-foreground">{avgMonthly}</Text>
          <Text variant="caption" as="p" className="mt-1 text-muted-foreground">per period</Text>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <Text variant="caption" as="p" className="text-muted-foreground">Total Employees</Text>
          <Text variant="body" as="p" className="mt-1 text-xl font-bold text-foreground">{totalEmployees}</Text>
          <Text variant="caption" as="p" className="mt-1 text-muted-foreground">as of period</Text>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <Text variant="caption" as="p" className="text-muted-foreground">Tax Withheld YTD</Text>
          <Text variant="body" as="p" className="mt-1 text-xl font-bold text-foreground">{taxWithheldYtd}</Text>
          <Text variant="caption" as="p" className="mt-1 text-muted-foreground">BIR withholding</Text>
        </div>
      </div>

      {monthlyData.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-5">
          <Text variant="body" as="h2" className="mb-4 font-semibold text-foreground">
            Monthly Payroll Trend — {selectedYear}
          </Text>
          <div className="flex items-end gap-4">
            {monthlyData.map((d) => (
              <div key={d.label} className="flex flex-col items-center gap-1">
                <Text variant="caption" as="span" className="text-muted-foreground">{d.formatted}</Text>
                <div
                  className="w-8 rounded-t bg-primary transition-opacity hover:opacity-80"
                  style={{ height: `${Math.max(4, (d.value / maxVal) * 96)}px` }}
                />
                <Text variant="caption" as="span" className="text-muted-foreground">{d.label}</Text>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
