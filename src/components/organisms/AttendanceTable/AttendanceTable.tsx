"use client";

import { Badge, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { AttendanceTableProps, AttendanceTableRow } from "./AttendanceTable.types";

const STATUS_VARIANT: Record<AttendanceTableRow["status"], "success" | "warning" | "destructive" | "secondary"> = {
  present: "success",
  late: "warning",
  absent: "destructive",
  leave: "secondary",
  "half-day": "secondary",
};

export function AttendanceTable({ rows, onView, className }: AttendanceTableProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-card", className)}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Employee</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Department</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Date</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Time In</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Time Out</th>
              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">Hours</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Status</th>
              {onView && <th className="w-24 px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-muted/50">
                <td className="px-4 py-3">
                  <Text variant="body" as="span" className="font-medium text-foreground">{row.employeeName}</Text>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{row.department}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{row.date}</td>
                <td className="px-4 py-3 text-sm text-foreground">{row.timeIn}</td>
                <td className="px-4 py-3 text-sm text-foreground">{row.timeOut}</td>
                <td className="px-4 py-3 text-center text-sm text-foreground">{row.hours}</td>
                <td className="px-4 py-3">
                  <Badge variant={STATUS_VARIANT[row.status]}>{row.status}</Badge>
                </td>
                {onView && (
                  <td className="px-4 py-3 text-right">
                    <button type="button" className="text-sm font-medium text-primary hover:underline" onClick={() => onView(row.id)}>
                      View
                    </button>
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
