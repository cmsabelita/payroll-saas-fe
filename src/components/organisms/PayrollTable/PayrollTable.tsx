"use client";

import { Badge, Button, FaIcon, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { PayrollRunStatus } from "@/data/mocks/mockPayroll";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import type { PayrollTableProps } from "./PayrollTable.types";

const STATUS_VARIANT: Record<
  PayrollRunStatus,
  "default" | "secondary" | "success" | "warning" | "outline"
> = {
  draft: "secondary",
  processing: "warning",
  computed: "outline",
  approved: "success",
  paid: "default",
};

function formatCurrency(value: number): string {
  return `₱ ${value.toLocaleString("en-PH")}`;
}

function getStatusVariant(
  status: PayrollRunStatus
): "default" | "secondary" | "success" | "warning" | "outline" {
  return STATUS_VARIANT[status] ?? "secondary";
}

export function PayrollTable({
  runs,
  onRunClick,
  onComputeClick,
  onMarkPaidClick,
  onViewClick,
  className,
}: PayrollTableProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Period
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Date Range
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Employees
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Gross Pay
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Net Pay
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Status
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {" "}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {runs.map((run) => (
            <tr
              key={run.id}
              className={cn(
                "cursor-pointer transition-colors hover:bg-muted/50",
                onRunClick && "cursor-pointer"
              )}
              role={onRunClick ? "button" : undefined}
              tabIndex={onRunClick ? 0 : undefined}
              onClick={
                onRunClick
                  ? () => onRunClick(run.id)
                  : undefined
              }
              onKeyDown={
                onRunClick
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ")
                        onRunClick(run.id);
                    }
                  : undefined
              }
            >
              <td className="px-4 py-3">
                <div>
                  <Text variant="body" as="p" className="font-semibold text-foreground">
                    {run.periodLabel}
                  </Text>
                  <Text variant="caption" as="p" className="text-muted-foreground">
                    {run.periodSubLabel}
                  </Text>
                </div>
              </td>
              <td className="px-4 py-3 text-muted-foreground">{run.dateRange}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <FaIcon icon={faUsers} size="sm" aria-hidden className="text-muted-foreground" />
                  {run.employeeCount}
                </div>
              </td>
              <td className="px-4 py-3 text-right text-muted-foreground">
                {run.grossPay != null ? formatCurrency(run.grossPay) : "—"}
              </td>
              <td className="px-4 py-3 text-right text-muted-foreground">
                {run.netPay != null ? formatCurrency(run.netPay) : "—"}
              </td>
              <td className="px-4 py-3">
                <Badge variant={getStatusVariant(run.status)}>
                  {run.status.charAt(0).toUpperCase() + run.status.slice(1)}
                </Badge>
              </td>
              <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-2">
                  {run.status === "draft" && onComputeClick && (
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => onComputeClick(run.id)}
                    >
                      Compute
                    </Button>
                  )}
                  {run.status === "approved" && onMarkPaidClick && (
                    <>
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => onMarkPaidClick(run.id)}
                      >
                        Mark Paid
                      </Button>
                      {onViewClick && (
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => onViewClick(run.id)}
                        >
                          View
                        </Button>
                      )}
                    </>
                  )}
                  {(run.status === "paid" || run.status === "computed") &&
                    onViewClick && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => onViewClick(run.id)}
                      >
                        View
                      </Button>
                    )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
