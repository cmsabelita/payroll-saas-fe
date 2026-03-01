"use client";

import { cn } from "@/utils";
import type { ComplianceRemittancesTableProps } from "./ComplianceRemittancesTable.types";

export function ComplianceRemittancesTable({ rows, onView, className }: ComplianceRemittancesTableProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-card", className)}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Agency</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Period</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">Amount</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Due</th>
              {onView && <th className="w-24 px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-muted/50">
                <td className="px-4 py-3 text-sm font-medium text-foreground">{row.agency}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{row.period}</td>
                <td className="px-4 py-3 text-right text-sm text-foreground">{row.amount}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{row.status}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{row.dueDate}</td>
                {onView && (
                  <td className="px-4 py-3 text-right">
                    <button type="button" className="text-sm font-medium text-primary hover:underline" onClick={() => onView(row.id)}>View</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
