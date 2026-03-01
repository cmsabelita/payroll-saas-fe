"use client";

import { Badge, FaIcon, Text } from "@/components/atoms";
import { TabFilter } from "@/components/molecules";
import { PortalShell } from "../../_components/PortalShell";
import Link from "next/link";
import { useState } from "react";
import {
  faCalendarDays,
  faCircleInfo,
  faClock,
  faPenToSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/utils";

const TABS = [
  { key: "all", label: "All" },
  { key: "leave", label: "Leave" },
  { key: "overtime", label: "Overtime" },
  { key: "adjustments", label: "Adjustments" },
];

type RequestType = "leave" | "overtime" | "adjustment";
type RequestStatus = "approved" | "pending" | "rejected";

const MOCK_REQUESTS = [
  {
    id: "1",
    type: "leave" as RequestType,
    title: "Sick Leave",
    dateLine: "Apr 14–15, 2026 · 2 days",
    filedLine: "Filed Apr 13, 2026",
    status: "approved" as RequestStatus,
    statusLabel: "Approved",
    rejectReason: null,
    canCancel: false,
  },
  {
    id: "2",
    type: "overtime" as RequestType,
    title: "Overtime",
    dateLine: "Apr 12, 2026 · 7:00 PM – 10:00 PM · 3 hrs",
    filedLine: "Filed Apr 12, 2026",
    status: "pending" as RequestStatus,
    statusLabel: "Pending",
    rejectReason: null,
    canCancel: true,
  },
  {
    id: "3",
    type: "leave" as RequestType,
    title: "Vacation Leave",
    dateLine: "Mar 20–22, 2026 · 3 days",
    filedLine: "Filed Mar 15, 2026",
    status: "approved" as RequestStatus,
    statusLabel: "Approved",
    rejectReason: null,
    canCancel: false,
  },
  {
    id: "4",
    type: "adjustment" as RequestType,
    title: "Missing Time In",
    dateLine: "Mar 11, 2026 · Attendance Adjustment",
    filedLine: "Filed Mar 12, 2026",
    status: "approved" as RequestStatus,
    statusLabel: "Approved",
    rejectReason: null,
    canCancel: false,
  },
  {
    id: "5",
    type: "leave" as RequestType,
    title: "Emergency Leave",
    dateLine: "Feb 5, 2026 · 1 day",
    filedLine: "Filed Feb 5, 2026",
    status: "approved" as RequestStatus,
    statusLabel: "Approved",
    rejectReason: null,
    canCancel: false,
  },
  {
    id: "6",
    type: "overtime" as RequestType,
    title: "Overtime",
    dateLine: "Jan 20, 2026 · 6:00 PM – 9:00 PM · 3 hrs",
    filedLine: "Filed Jan 20, 2026",
    status: "rejected" as RequestStatus,
    statusLabel: "Rejected",
    rejectReason: "Not enough OT balance",
    canCancel: false,
  },
];

function typeIcon(type: RequestType) {
  switch (type) {
    case "leave":
      return faCalendarDays;
    case "overtime":
      return faClock;
    case "adjustment":
      return faPenToSquare;
    default:
      return faCalendarDays;
  }
}

function typeBadgeLabel(type: RequestType) {
  switch (type) {
    case "leave":
      return "Leave";
    case "overtime":
      return "OT";
    case "adjustment":
      return "Adj";
    default:
      return "";
  }
}

function typeIconBgClass(type: RequestType) {
  switch (type) {
    case "leave":
      return "bg-primary/10 text-primary";
    case "overtime":
      return "bg-amber-500/10 text-amber-600";
    case "adjustment":
      return "bg-teal-500/10 text-teal-600";
    default:
      return "bg-muted text-muted-foreground";
  }
}

function statusVariant(status: RequestStatus): "success" | "warning" | "destructive" | "secondary" {
  switch (status) {
    case "approved":
      return "success";
    case "pending":
      return "warning";
    case "rejected":
      return "destructive";
    default:
      return "secondary";
  }
}

export default function PortalRequestsPage() {
  const [tab, setTab] = useState("all");

  const filtered =
    tab === "all"
      ? MOCK_REQUESTS
      : MOCK_REQUESTS.filter((r) => r.type === tab || (tab === "overtime" && r.type === "overtime"));

  return (
    <PortalShell>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Text variant="heading" as="h1" className="text-lg font-bold text-foreground">
              My Requests
            </Text>
            <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
              Leave, overtime & other requests
            </Text>
          </div>
          <Link
            href="/portal/requests/leave/new"
            className="inline-flex h-10 items-center gap-1.5 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:brightness-110"
          >
            <FaIcon icon={faPlus} size="sm" aria-hidden />
            New Request
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <TabFilter
            tabs={TABS}
            value={tab}
            onChange={setTab}
            className="rounded-xl bg-muted p-1 [&_button]:rounded-lg [&_button]:px-3.5 [&_button]:py-1.5"
          />
        </div>

        <div className="space-y-3">
          {filtered.map((req) => (
            <div
              key={req.id}
              className="flex flex-wrap items-start gap-4 rounded-xl border border-border bg-card p-5"
            >
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                  typeIconBgClass(req.type)
                )}
              >
                <FaIcon icon={typeIcon(req.type)} size="sm" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {typeBadgeLabel(req.type)}
                      </Badge>
                      <Text variant="caption" as="span" className="font-semibold text-foreground">
                        {req.title}
                      </Text>
                    </div>
                    <Text variant="caption" as="p" className="text-muted-foreground">
                      {req.dateLine}
                    </Text>
                    <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground/80">
                      {req.filedLine}
                    </Text>
                    {req.rejectReason != null && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
                        <FaIcon icon={faCircleInfo} size="xs" aria-hidden />
                        {req.rejectReason}
                      </p>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <Badge variant={statusVariant(req.status)}>{req.statusLabel}</Badge>
                    <Link
                      href={`/portal/requests/${req.id}`}
                      className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                    >
                      View
                    </Link>
                    {req.canCancel && (
                      <button
                        type="button"
                        className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-1.5 text-xs font-medium text-destructive hover:bg-destructive/20"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Text variant="caption" as="p" className="text-center text-muted-foreground">
          Showing {filtered.length} request{filtered.length !== 1 ? "s" : ""} in 2026
        </Text>
      </div>
    </PortalShell>
  );
}
