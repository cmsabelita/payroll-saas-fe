"use client";

import { Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { AttendanceDetailSectionProps } from "./AttendanceDetailSection.types";

export function AttendanceDetailSection({
  employeeName,
  employeeId,
  date,
  timeIn,
  timeOut,
  hours,
  status,
  breakMinutes = 0,
  overtimeMinutes = 0,
  className,
}: AttendanceDetailSectionProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="rounded-xl border border-border bg-card p-6">
        <Text variant="body" as="h2" className="mb-4 font-semibold text-foreground">Attendance Summary</Text>
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-medium text-muted-foreground">Employee</dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{employeeName}</dd>
            {employeeId != null && <dd className="text-xs text-muted-foreground">ID: {employeeId}</dd>}
          </div>
          <div>
            <dt className="text-xs font-medium text-muted-foreground">Date</dt>
            <dd className="mt-1 text-sm text-foreground">{date}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-muted-foreground">Status</dt>
            <dd className="mt-1 text-sm text-foreground">{status}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-muted-foreground">Time In</dt>
            <dd className="mt-1 text-sm text-foreground">{timeIn}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-muted-foreground">Time Out</dt>
            <dd className="mt-1 text-sm text-foreground">{timeOut}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-muted-foreground">Hours</dt>
            <dd className="mt-1 text-sm text-foreground">{hours}</dd>
          </div>
          {breakMinutes > 0 && (
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Break</dt>
              <dd className="mt-1 text-sm text-foreground">{breakMinutes} min</dd>
            </div>
          )}
          {overtimeMinutes > 0 && (
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Overtime</dt>
              <dd className="mt-1 text-sm text-foreground">{overtimeMinutes} min</dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}
