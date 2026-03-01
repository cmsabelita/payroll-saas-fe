"use client";

import { Badge, FaIcon, Text } from "@/components/atoms";
import { PortalShell } from "../../../_components/PortalShell";
import Link from "next/link";
import { use } from "react";
import { faCheck, faChevronLeft, faClock } from "@fortawesome/free-solid-svg-icons";

const MOCK = {
  id: "REQ-2026-0041",
  typeLabel: "Leave Request",
  statusLabel: "Under Review",
  title: "Vacation Leave — Apr 14–15, 2026",
  filedOn: "Apr 5, 2026 · REQ-2026-0041",
  fields: [
    { label: "Leave Type", value: "Vacation Leave (VL)" },
    { label: "Dates", value: "Apr 14–15, 2026" },
    { label: "Duration", value: "2 working days" },
    { label: "VL Balance Before", value: "9.5 days" },
    { label: "Balance After (if approved)", value: "7.5 days" },
    { label: "Approver", value: "Mark Santos" },
  ],
  reason: "Rest and personal travel. Will be back Apr 16.",
  timeline: [
    { label: "Request filed", sub: "Apr 5, 2026 · 9:14 AM · by Juan dela Cruz", done: true },
    { label: "Under review by manager", sub: "Apr 5, 2026 · 9:14 AM · notification sent to Mark Santos", done: true },
    { label: "Awaiting approval…", sub: null, done: false },
  ],
};

export default function PortalRequestDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <PortalShell>
      <div key={id} className="flex flex-col gap-6">
        <nav className="flex items-center gap-2" aria-label="Breadcrumb">
          <Link
            href="/portal/requests"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <FaIcon icon={faChevronLeft} size="xs" aria-hidden />
            Requests
          </Link>
          <span className="text-muted-foreground/60" aria-hidden>/</span>
          <span className="text-sm font-medium text-foreground">REQ-{id}</span>
        </nav>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="min-w-0 flex-1 space-y-4">
            {/* Header card */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{MOCK.typeLabel}</Badge>
                    <Badge variant="warning">{MOCK.statusLabel}</Badge>
                  </div>
                  <Text variant="body" as="h1" className="mt-2 font-semibold text-foreground">
                    {MOCK.title}
                  </Text>
                  <Text variant="caption" as="p" className="mt-1 text-muted-foreground">
                    Filed on {MOCK.filedOn}
                  </Text>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {MOCK.fields.map((f) => (
                  <div key={f.label}>
                    <Text variant="caption" as="p" className="mb-1 text-muted-foreground">
                      {f.label}
                    </Text>
                    <Text variant="body" as="p" className="font-medium text-foreground">
                      {f.value}
                    </Text>
                  </div>
                ))}
              </div>

              <div className="mt-4 border-t border-border pt-4">
                <Text variant="caption" as="p" className="mb-1 text-muted-foreground">
                  Reason
                </Text>
                <Text variant="body" as="p" className="text-muted-foreground">
                  {MOCK.reason}
                </Text>
              </div>
            </div>

            {/* Timeline */}
            <div className="rounded-xl border border-border bg-card p-6">
              <Text variant="label" as="h2" className="mb-4 font-semibold text-foreground">
                Activity Timeline
              </Text>
              <ol className="relative space-y-5 border-l border-border pl-5">
                {MOCK.timeline.map((item, i) => (
                  <li key={i} className="relative">
                    <span
                      className={item.done ? "bg-primary" : "bg-muted"}
                      style={{
                        position: "absolute",
                        left: "-1.5rem",
                        top: "0.25rem",
                        width: "0.75rem",
                        height: "0.75rem",
                        borderRadius: "9999px",
                      }}
                    />
                    <Text variant="caption" as="p" className="font-semibold text-foreground">
                      {item.label}
                    </Text>
                    {item.sub != null && (
                      <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
                        {item.sub}
                      </Text>
                    )}
                    {!item.done && item.sub == null && (
                      <Text variant="caption" as="p" className="mt-0.5 italic text-muted-foreground">
                        Awaiting approval…
                      </Text>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full shrink-0 space-y-4 lg:w-64">
            <div className="rounded-xl border border-border bg-card p-5">
              <Text variant="label" as="h2" className="mb-3 font-semibold text-foreground">
                Request Status
              </Text>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <FaIcon icon={faCheck} className="text-[0.5rem] text-primary-foreground" aria-hidden />
                  </div>
                  <Text variant="caption" as="p" className="font-medium text-foreground">
                    Filed
                  </Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400">
                    <FaIcon icon={faClock} className="text-[0.4rem] text-white" aria-hidden />
                  </div>
                  <Text variant="caption" as="p" className="font-semibold text-foreground">
                    Under Review
                  </Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Text variant="caption" as="span" className="text-muted-foreground">
                      3
                    </Text>
                  </div>
                  <Text variant="caption" as="p" className="text-muted-foreground">
                    Approved / Rejected
                  </Text>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <Text variant="label" as="h2" className="mb-3 font-semibold text-foreground">
                Actions
              </Text>
              <div className="space-y-2">
                <button
                  type="button"
                  className="w-full rounded-lg border border-destructive/30 bg-destructive/10 py-2 text-xs font-medium text-destructive hover:bg-destructive/20"
                >
                  Cancel Request
                </button>
                <Text variant="caption" as="p" className="text-center text-muted-foreground">
                  You can cancel this request while it is still under review.
                </Text>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PortalShell>
  );
}
