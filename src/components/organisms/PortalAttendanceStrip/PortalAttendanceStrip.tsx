"use client";

import { Button, Link, Surface, Text } from "@/components/atoms";
import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type {
  PortalAttendanceStripDay,
  PortalAttendanceStripProps,
  PortalAttendanceDayStatus,
} from "./PortalAttendanceStrip.types";

const dayStatusStyles = cva("", {
  variants: {
    status: {
      "on-time": "bg-success/10 text-success",
      late: "bg-warning/10 text-warning",
      pending: "bg-muted text-muted-foreground",
      absent: "bg-destructive/10 text-destructive",
    },
  },
});

const dayDotStyles = cva("size-2 rounded-full", {
  variants: {
    status: {
      "on-time": "bg-success",
      late: "bg-warning",
      pending: "bg-muted-foreground",
      absent: "bg-destructive",
    },
  },
});

function statusLabel(status: PortalAttendanceDayStatus): string {
  switch (status) {
    case "on-time":
      return "On time";
    case "late":
      return "Late";
    case "pending":
      return "Pending";
    case "absent":
      return "Absent";
    default:
      return "—";
  }
}

export function PortalAttendanceStrip({
  weekLabel,
  days,
  todayLabel,
  todayDetail,
  onTimeOut,
  viewAllHref,
  className,
}: PortalAttendanceStripProps) {
  return (
    <Surface
      elevation="none"
      className={cn("rounded-xl border border-border p-5", className)}
      role="region"
      aria-label="Attendance this week"
    >
      <div className="mb-4 flex items-center justify-between">
        <Text variant="label" as="h3" className="font-semibold">
          Attendance This Week
        </Text>
        <Text variant="caption" as="span" className="text-muted-foreground">
          {weekLabel}
        </Text>
      </div>

      <div className="mb-4 flex gap-2">
        {days.map((day: PortalAttendanceStripDay, i) => (
          <div
            key={i}
            className={cn(
              "flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-lg p-2",
              dayStatusStyles({ status: day.status })
            )}
          >
            <div className={cn(dayDotStyles({ status: day.status }))} />
            <Text variant="caption" as="span" className="font-semibold">
              {day.dayLabel}
            </Text>
            <Text variant="caption" as="span" className="text-muted-foreground">
              {day.timeIn ?? "—"}
            </Text>
            <Text variant="caption" as="span" className={cn("text-xs font-semibold", day.status === "on-time" && "text-success", day.status === "late" && "text-warning")}>
              {statusLabel(day.status)}
            </Text>
          </div>
        ))}
      </div>

      {todayLabel != null && (todayDetail != null || onTimeOut != null) && (
        <div className="mb-3 flex items-center justify-between rounded-xl bg-muted/50 p-3.5">
          <div>
            <Text variant="caption" as="p" className="font-semibold text-foreground">
              {todayLabel}
            </Text>
            {todayDetail != null && (
              <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
                {todayDetail}
              </Text>
            )}
          </div>
          {onTimeOut != null && (
            <Button variant="destructive" size="sm" onClick={onTimeOut}>
              Time Out
            </Button>
          )}
        </div>
      )}

      {viewAllHref != null && (
        <Link
          href={viewAllHref}
          variant="muted"
          className="block rounded-lg border border-border py-2 text-center text-xs font-medium hover:bg-muted/50"
        >
          View full attendance →
        </Link>
      )}
    </Surface>
  );
}
