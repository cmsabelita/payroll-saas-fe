"use client";

import { Badge, FaIcon, Text } from "@/components/atoms";
import { PortalShell } from "../../_components/PortalShell";
import Link from "next/link";
import { useState } from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/utils";

const MOCK_EMPLOYEE = "Juan dela Cruz · Software Engineer";

const MONTHS: Record<string, string> = {
  "2026-04": "April 2026",
  "2026-03": "March 2026",
  "2026-05": "May 2026",
};

type DayKind = "present" | "late" | "leave" | "holiday" | "rest" | "today" | "present_ot" | "future";

interface DayCell {
  date: number | null;
  kind: DayKind;
  label: string;
}

// April 2026: 1 = Wed. So 0,1 = empty; 2 = 1st (Wed) ... 31 = 30th (Thu). 32-34 = empty for rest of row.
function buildApril2026Days(): DayCell[] {
  const days: DayCell[] = [];
  const firstWeekday = 3; // 0=Sun, 3=Wed for Apr 1
  for (let i = 0; i < firstWeekday; i++) days.push({ date: null, kind: "rest", label: "" });
  const statusByDate: Record<number, DayKind> = {
    1: "present",
    2: "present",
    3: "present",
    4: "present",
    5: "late",
    6: "rest",
    7: "rest",
    8: "holiday",
    9: "present",
    10: "present",
    11: "present",
    12: "present",
    13: "rest",
    14: "leave",
    15: "leave",
    16: "present",
    17: "present",
    18: "present",
    19: "present_ot",
    20: "rest",
    21: "rest",
    22: "today",
    23: "future",
    24: "future",
    25: "future",
    26: "future",
    27: "future",
    28: "future",
  };
  for (let d = 1; d <= 30; d++) {
    const kind = statusByDate[d] ?? (d > 22 ? "future" : "present");
    const label =
      kind === "present"
        ? "P"
        : kind === "late"
          ? "Late"
          : kind === "leave"
            ? "Leave"
            : kind === "holiday"
              ? "Hol"
              : kind === "rest"
                ? "Rest"
                : kind === "today"
                  ? "Today"
                  : kind === "present_ot"
                    ? "P+OT"
                    : "";
    days.push({ date: d, kind, label });
  }
  const total = days.length;
  const remainder = total % 7;
  const pad = remainder === 0 ? 0 : 7 - remainder;
  for (let i = 0; i < pad; i++) days.push({ date: null, kind: "rest", label: "" });
  return days;
}

const APRIL_DAYS = buildApril2026Days();

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const TIME_LOG = [
  { date: "Apr 22 (Mon)", dayIn: "8:02 AM", dayOut: "5:00 PM", hours: "8.0h", status: "Present", ot: "—" },
  { date: "Apr 19 (Fri)", dayIn: "8:00 AM", dayOut: "8:00 PM", hours: "12.0h", status: "Present", ot: "4h OT" },
  { date: "Apr 18 (Thu)", dayIn: "7:58 AM", dayOut: "5:00 PM", hours: "8.0h", status: "Present", ot: "—" },
  { date: "Apr 17 (Wed)", dayIn: "7:55 AM", dayOut: "5:00 PM", hours: "8.0h", status: "Present", ot: "—" },
  { date: "Apr 16 (Tue)", dayIn: "—", dayOut: "—", hours: "—", status: "Sick Leave", ot: "—" },
  { date: "Apr 5 (Fri)", dayIn: "8:32 AM", dayOut: "5:00 PM", hours: "7.5h", status: "Late", ot: "—" },
];

export default function PortalAttendancePage() {
  const [monthKey, setMonthKey] = useState("2026-04");
  const monthLabel = MONTHS[monthKey] ?? "April 2026";

  const goPrev = () => setMonthKey("2026-03");
  const goNext = () => setMonthKey("2026-05");

  return (
    <PortalShell>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Text variant="heading" as="h1" className="text-lg font-bold text-foreground">
              My Attendance
            </Text>
            <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
              {MOCK_EMPLOYEE}
            </Text>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2">
            <button
              type="button"
              onClick={goPrev}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Previous month"
            >
              <FaIcon icon={faChevronLeft} size="sm" />
            </button>
            <span className="min-w-[7rem] px-3 text-center text-sm font-semibold text-foreground">
              {monthLabel}
            </span>
            <button
              type="button"
              onClick={goNext}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Next month"
            >
              <FaIcon icon={faChevronRight} size="sm" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-border bg-card p-4">
            <Text variant="caption" as="p" className="text-muted-foreground">Days Present</Text>
            <Text variant="heading" as="p" className="mt-1 text-xl font-bold text-primary">22</Text>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <Text variant="caption" as="p" className="text-muted-foreground">Late Arrivals</Text>
            <Text variant="heading" as="p" className="mt-1 text-xl font-bold text-amber-500">1</Text>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <Text variant="caption" as="p" className="text-muted-foreground">Leave Days</Text>
            <Text variant="heading" as="p" className="mt-1 text-xl font-bold text-blue-500">2</Text>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <Text variant="caption" as="p" className="text-muted-foreground">OT Hours</Text>
            <Text variant="heading" as="p" className="mt-1 text-xl font-bold text-purple-500">8h</Text>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-2 grid grid-cols-7 gap-1">
            {WEEKDAYS.map((d) => (
              <div key={d} className="py-1 text-center text-xs font-semibold text-muted-foreground">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {APRIL_DAYS.map((cell, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-lg border p-2 text-center transition-colors",
                  cell.kind === "rest" && cell.date == null && "bg-muted/30",
                  cell.kind === "today" && "border-2 border-primary bg-primary/10",
                  cell.kind === "future" && "bg-muted/20 opacity-60",
                  cell.kind === "leave" && "bg-blue-500/10",
                  cell.kind === "holiday" && "bg-amber-500/10",
                  (cell.kind === "present" || cell.kind === "present_ot" || cell.kind === "today") &&
                    "border-transparent hover:border-border",
                  cell.kind === "late" && "border-transparent"
                )}
              >
                <p
                  className={cn(
                    "text-xs font-medium",
                    cell.date == null && "text-muted-foreground",
                    cell.kind === "today" && "font-semibold text-primary",
                    cell.kind === "leave" && "text-blue-600",
                    cell.kind === "holiday" && "text-amber-600",
                    cell.kind === "future" && "text-muted-foreground"
                  )}
                >
                  {cell.date ?? ""}
                </p>
                {cell.label ? (
                  <>
                    <div
                      className={cn(
                        "mx-auto mt-1 h-2 w-2 rounded-full",
                        (cell.kind === "present" || cell.kind === "today" || cell.kind === "present_ot") &&
                          "bg-primary",
                        cell.kind === "late" && "bg-amber-500",
                        cell.kind === "leave" && "bg-blue-500",
                        cell.kind === "holiday" && "bg-amber-500"
                      )}
                    />
                    <p
                      className={cn(
                        "mt-0.5 text-xs",
                        cell.kind === "today" && "text-primary",
                        cell.kind === "leave" && "text-blue-600",
                        cell.kind === "holiday" && "text-amber-600",
                        cell.kind === "late" && "text-amber-600",
                        (cell.kind === "present" || cell.kind === "present_ot") && "text-muted-foreground",
                        cell.kind === "rest" && "text-muted-foreground/70"
                      )}
                    >
                      {cell.label}
                    </p>
                  </>
                ) : (
                  cell.kind === "rest" && cell.date == null && (
                    <p className="mt-1.5 text-xs text-muted-foreground/70">Rest</p>
                  )
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-5 border-t border-border pt-4">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="text-xs text-muted-foreground">Present</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              <span className="text-xs text-muted-foreground">Late</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              <span className="text-xs text-muted-foreground">Leave</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              <span className="text-xs text-muted-foreground">Holiday</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
              <span className="text-xs text-muted-foreground">Rest Day</span>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
            <Text variant="label" as="h2" className="font-semibold text-foreground">
              Recent Time Log
            </Text>
            <Link
              href="/portal/requests/attendance/new"
              className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:brightness-110"
            >
              + File Correction
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-muted/30">
                <tr>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Date
                  </th>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Day In
                  </th>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Day Out
                  </th>
                  <th className="px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Hours
                  </th>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Status
                  </th>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    OT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {TIME_LOG.map((row) => (
                  <tr key={row.date} className="transition-colors hover:bg-muted/20">
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{row.date}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{row.dayIn}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{row.dayOut}</td>
                    <td className="px-4 py-3 text-center text-sm text-muted-foreground">{row.hours}</td>
                    <td className="px-4 py-3">
                      <Badge
                        variant={
                          row.status === "Present"
                            ? "success"
                            : row.status === "Late"
                              ? "warning"
                              : "secondary"
                        }
                      >
                        {row.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{row.ot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PortalShell>
  );
}
