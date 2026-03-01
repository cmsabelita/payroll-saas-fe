"use client";

import { Avatar, Badge, Button, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type {
  EmployeeFinalPaySectionProps,
  EmployeeFinalPayBreakdownRow,
} from "./EmployeeFinalPaySection.types";

function BreakdownTable({
  rows,
  subtitle,
  subtotal,
  amountNegative,
}: {
  rows: EmployeeFinalPayBreakdownRow[];
  subtitle: string;
  subtotal: string;
  amountNegative?: boolean;
}) {
  return (
    <div className="px-5 pt-4 pb-2">
      <Text
        as="p"
        variant="caption"
        className="mb-3 font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {subtitle}
      </Text>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="pb-2 text-left font-medium text-muted-foreground">Description</th>
            <th className="pb-2 text-right font-medium text-muted-foreground">Amount</th>
            <th className="pb-2 pl-6 text-left font-medium text-muted-foreground">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row, i) => (
            <tr key={i}>
              <td className="py-3 font-medium text-foreground">{row.description}</td>
              <td
                className={cn(
                  "py-3 text-right font-semibold",
                  amountNegative ? "text-destructive" : "text-foreground"
                )}
              >
                {row.amount}
              </td>
              <td className="py-3 pl-6 text-muted-foreground">{row.notes ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-1 flex items-center justify-between border-t border-border py-3">
        <Text variant="body" as="span" className="font-semibold text-muted-foreground">
          Subtotal {subtitle}
        </Text>
        <Text
          variant="body"
          as="span"
          className={cn("font-bold", amountNegative && "text-destructive")}
        >
          {subtotal}
        </Text>
      </div>
    </div>
  );
}

export function EmployeeFinalPaySection({
  displayName,
  employeeId,
  lastDay,
  separationType,
  clearanceStatus,
  earnings,
  earningsSubtotal,
  deductions,
  deductionsSubtotal,
  netFinalPay,
  clearanceChecklist,
  onBackToDraft,
  onRelease,
  onEdit,
  className,
}: EmployeeFinalPaySectionProps) {
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-4">
          <Avatar size="md" fallback={initials} className="bg-primary/15 text-primary" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <Text variant="body" as="span" className="font-semibold text-foreground">
                {displayName}
              </Text>
              <Text variant="caption" as="span" className="text-muted-foreground">
                {employeeId}
              </Text>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span>Last Day: <strong className="text-foreground">{lastDay}</strong></span>
              <span>Separation: <strong className="text-foreground">{separationType}</strong></span>
              {clearanceStatus != null && (
                <span>
                  Clearance: <Badge variant="warning">{clearanceStatus}</Badge>
                </span>
              )}
            </div>
          </div>
          {onEdit != null && (
            <Button type="button" variant="outline" size="sm" onClick={onEdit}>
              Edit
            </Button>
          )}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="border-b border-border px-5 py-4">
          <Text as="h3" variant="label" className="font-semibold text-foreground">
            Final Pay Breakdown
          </Text>
        </div>
        <BreakdownTable
          rows={earnings}
          subtitle="Earnings"
          subtotal={earningsSubtotal}
        />
        <div className="mx-5 border-t border-border" />
        <BreakdownTable
          rows={deductions}
          subtitle="Deductions"
          subtotal={deductionsSubtotal}
          amountNegative
        />
        <div className="mx-5 mb-5 mt-1 flex items-center justify-between rounded-xl bg-primary/10 p-4">
          <div>
            <Text
              as="p"
              variant="caption"
              className="font-semibold uppercase tracking-wider text-primary"
            >
              Total Net Final Pay
            </Text>
            <Text variant="caption" as="p" className="text-primary/80">
              Amount to be released to employee
            </Text>
          </div>
          <Text variant="body" as="p" className="text-2xl font-bold text-primary">
            {netFinalPay}
          </Text>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <Text as="h3" variant="label" className="mb-4 font-semibold text-foreground">
          Clearance Checklist
        </Text>
        <div className="space-y-3">
          {clearanceChecklist.map((item, i) => (
            <div
              key={i}
              className={cn(
                "flex items-center gap-3 rounded-xl border p-3",
                item.status === "cleared"
                  ? "border-border bg-muted/30"
                  : "border-warning/30 bg-warning/5"
              )}
            >
              <div
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded",
                  item.status === "cleared" ? "bg-success/20" : "border-2 border-border bg-card"
                )}
              />
              <Text variant="body" as="span" className="flex-1 text-foreground">
                {item.label}
              </Text>
              <Badge variant={item.status === "cleared" ? "success" : "warning"}>
                {item.status === "cleared" ? "Cleared" : "Pending"}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between py-2">
        {onBackToDraft != null && (
          <Button type="button" variant="outline" size="md" onClick={onBackToDraft}>
            Back to Draft
          </Button>
        )}
        {onRelease != null && (
          <Button type="button" size="md" onClick={onRelease}>
            Release Final Pay
          </Button>
        )}
      </div>
    </div>
  );
}
