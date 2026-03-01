"use client";

import { Badge, Button } from "@/components/atoms";
import { cn } from "@/utils";
import type { ComplianceTrainingTableProps } from "./ComplianceTrainingTable.types";

const STATUS_VARIANT: Record<string, "success" | "warning" | "secondary"> = {
  completed: "success",
  pending: "warning",
  overdue: "secondary",
};

export function ComplianceTrainingTable({
  rows,
  onView,
  className,
}: ComplianceTrainingTableProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Training Name
            </th>
            <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Type
            </th>
            <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Employee
            </th>
            <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Department
            </th>
            <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Completed
            </th>
            <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Status
            </th>
            <th className="px-5 py-3 w-20" />
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-muted/30">
              <td className="px-5 py-3 font-medium text-foreground">{row.title}</td>
              <td className="px-5 py-3 text-muted-foreground">{row.type}</td>
              <td className="px-5 py-3 text-muted-foreground">{row.employeeName}</td>
              <td className="px-5 py-3 text-muted-foreground">{row.department}</td>
              <td className="px-5 py-3 text-muted-foreground">{row.completedDate}</td>
              <td className="px-5 py-3">
                <Badge variant={STATUS_VARIANT[row.status] ?? "secondary"}>
                  {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                </Badge>
              </td>
              <td className="px-5 py-3">
                {onView ? (
                  <Button variant="ghost" size="sm" className="text-primary hover:underline" onClick={() => onView(row.id)}>
                    View
                  </Button>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
