"use client";

import { Badge, Button, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { ComplianceDisciplinaryTableProps } from "./ComplianceDisciplinaryTable.types";

const STATUS_VARIANT: Record<string, "default" | "secondary" | "warning" | "success"> = {
  closed: "secondary",
  open: "warning",
  pending_hearing: "warning",
  sealed: "default",
};

const DECISION_VARIANT: Record<string, "default" | "secondary" | "warning" | "destructive"> = {
  "Verbal Warning": "secondary",
  "1st Written Warning": "warning",
  "Suspension — 3 days": "destructive",
};

export function ComplianceDisciplinaryTable({
  rows,
  onView,
  className,
}: ComplianceDisciplinaryTableProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Case #
            </th>
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Employee
            </th>
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Offense
            </th>
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              NTE Issued
            </th>
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Hearing
            </th>
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Decision
            </th>
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Status
            </th>
            <th className="px-4 py-2.5 w-20" />
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr
              key={row.id}
              className={cn(
                "hover:bg-muted/30",
                row.sealed && "opacity-60"
              )}
            >
              <td className="px-4 py-3 font-mono text-muted-foreground">{row.caseNumber}</td>
              <td className="px-4 py-3">
                <Text variant="body" as="p" className="font-medium text-foreground">
                  {row.employeeName}
                </Text>
                {row.employeeDept ? (
                  <Text variant="caption" as="p" className="text-muted-foreground">
                    {row.employeeDept}
                  </Text>
                ) : null}
              </td>
              <td className="px-4 py-3 text-muted-foreground">{row.offense}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.nteIssued}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.hearing}</td>
              <td className="px-4 py-3">
                {row.sealed ? (
                  <span className="text-muted-foreground">—</span>
                ) : (
                  <Badge variant={DECISION_VARIANT[row.decision] ?? "default"}>
                    {row.decision}
                  </Badge>
                )}
              </td>
              <td className="px-4 py-3">
                <Badge variant={STATUS_VARIANT[row.status] ?? "secondary"}>
                  {row.status === "pending_hearing" ? "Pending Hearing" : row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                </Badge>
              </td>
              <td className="px-4 py-3">
                {row.sealed ? (
                  <Text variant="caption" as="span" className="text-muted-foreground">
                    Restricted
                  </Text>
                ) : onView ? (
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
