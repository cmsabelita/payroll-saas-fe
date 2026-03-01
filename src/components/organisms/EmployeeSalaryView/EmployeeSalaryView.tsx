"use client";

import { Button, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type {
  EmployeeSalaryViewProps,
  EmployeeSalaryHistoryRow,
  EmployeeAllowanceRow,
} from "./EmployeeSalaryView.types";

export function EmployeeSalaryView({
  summary,
  history,
  allowances,
  onRecordSalaryChange,
  onAddAllowance,
  onEditAllowance,
  className,
}: EmployeeSalaryViewProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-4 flex items-center justify-between">
          <Text as="h3" variant="label" className="font-semibold text-foreground">
            Current Salary
          </Text>
          {onRecordSalaryChange != null && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onRecordSalaryChange}
            >
              Record Salary Change
            </Button>
          )}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-muted/50 p-4">
            <Text variant="caption" as="p" className="mb-1 text-muted-foreground">
              Monthly Basic
            </Text>
            <Text variant="body" as="p" className="text-xl font-bold text-foreground">
              {summary.monthlyBasic}
            </Text>
          </div>
          <div className="rounded-xl bg-muted/50 p-4">
            <Text variant="caption" as="p" className="mb-1 text-muted-foreground">
              Daily Rate
            </Text>
            <Text variant="body" as="p" className="text-xl font-bold text-foreground">
              {summary.dailyRate}
            </Text>
            <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
              Based on working days
            </Text>
          </div>
          <div className="rounded-xl bg-muted/50 p-4">
            <Text variant="caption" as="p" className="mb-1 text-muted-foreground">
              Hourly Rate
            </Text>
            <Text variant="body" as="p" className="text-xl font-bold text-foreground">
              {summary.hourlyRate}
            </Text>
            <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
              8 hrs/day
            </Text>
          </div>
          <div className="rounded-xl bg-muted/50 p-4">
            <Text variant="caption" as="p" className="mb-1 text-muted-foreground">
              Effective Since
            </Text>
            <Text variant="body" as="p" className="text-xl font-bold text-foreground">
              {summary.effectiveSince}
            </Text>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="border-b border-border px-5 py-4">
          <Text as="h3" variant="label" className="font-semibold text-foreground">
            Salary History
          </Text>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Effective Date
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Monthly Basic
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Change
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Change %
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Reason
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Updated By
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {history.map((row: EmployeeSalaryHistoryRow, i: number) => (
                <tr key={i} className="hover:bg-muted/30">
                  <td className="px-5 py-3.5 font-medium text-foreground">{row.effectiveDate}</td>
                  <td className="px-5 py-3.5 font-bold text-foreground">{row.monthlyBasic}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{row.change ?? "—"}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{row.changePercent ?? "—"}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{row.reason ?? "—"}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{row.updatedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Text as="h3" variant="label" className="font-semibold text-foreground">
            Allowances & Benefits
          </Text>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Type
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Amount
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Frequency
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Taxable
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Since
                </th>
                <th className="w-20 px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {allowances.map((row: EmployeeAllowanceRow, i: number) => (
                <tr key={i} className="hover:bg-muted/30">
                  <td className="px-5 py-3.5 font-medium text-foreground">{row.type}</td>
                  <td className="px-5 py-3.5 font-semibold text-foreground">{row.amount}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{row.frequency}</td>
                  <td className="px-5 py-3.5">
                    <span className="rounded-full px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground">
                      {row.taxable}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-muted-foreground">{row.since}</td>
                  <td className="px-5 py-3.5">
                    {onEditAllowance != null && (
                      <button
                        type="button"
                        className="text-xs font-medium text-muted-foreground hover:text-foreground"
                        onClick={() => onEditAllowance(i)}
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {onAddAllowance != null && (
                <tr>
                  <td colSpan={6} className="px-5 py-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-border py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                      onClick={onAddAllowance}
                    >
                      Add Allowance
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
