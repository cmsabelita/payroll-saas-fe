"use client";

import { Badge, Button, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { PayrollEmployeeRowStatus } from "./PayrollEmployeesTable.types";
import type { PayrollEmployeesTableProps } from "./PayrollEmployeesTable.types";

function formatCurrency(value: number): string {
  return `₱ ${value.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;
}

const STATUS_VARIANT: Record<
  PayrollEmployeeRowStatus,
  "success" | "warning" | "secondary"
> = {
  ok: "success",
  adj: "warning",
  pending: "secondary",
};

export function PayrollEmployeesTable({
  rows,
  onViewBreakdown,
  className,
}: PayrollEmployeesTableProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Employee
            </th>
            <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Position
            </th>
            <th className="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Gross Pay
            </th>
            <th className="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Deductions
            </th>
            <th className="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Net Pay
            </th>
            <th className="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Status
            </th>
            <th className="px-5 py-3.5" />
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-muted/30">
              <td className="px-5 py-3">
                <Text variant="body" as="p" className="font-medium text-foreground">
                  {row.name}
                </Text>
                <Text variant="caption" as="p" className="text-muted-foreground">
                  {row.employeeId}
                </Text>
              </td>
              <td className="px-5 py-3 text-muted-foreground">{row.position}</td>
              <td className="px-5 py-3 text-right font-medium text-foreground">
                {formatCurrency(row.grossPay)}
              </td>
              <td className="px-5 py-3 text-right text-destructive">
                {formatCurrency(row.deductions)}
              </td>
              <td className="px-5 py-3 text-right font-semibold text-primary">
                {formatCurrency(row.netPay)}
              </td>
              <td className="px-5 py-3 text-center">
                <Badge variant={STATUS_VARIANT[row.status]}>
                  {row.status === "adj" ? "Adj." : row.status === "ok" ? "OK" : "Pending"}
                </Badge>
              </td>
              <td className="px-5 py-3">
                {onViewBreakdown != null && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:underline"
                    onClick={() => onViewBreakdown(row.employeeId)}
                  >
                    View
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
