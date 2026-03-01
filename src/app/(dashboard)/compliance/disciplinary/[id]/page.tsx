"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";
import { ComplianceBreadcrumb } from "../../_components/ComplianceBreadcrumb";
import { DashboardShell } from "../../../_components/DashboardShell";

export default function ComplianceDisciplinaryDetailPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";

  return (
    <DashboardShell
      topbarTitle="Disciplinary Record"
      topbarSubtitle="Case details"
      topbarTrailing={
        <>
          <IconButton variant="ghost" size="sm" aria-label="Notifications">
            <FaIcon icon={faBell} size="sm" />
          </IconButton>
          <Avatar size="sm" fallback="MS" />
        </>
      }
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <ComplianceBreadcrumb
          segments={[
            { label: "Compliance", href: "/compliance" },
            { label: "Disciplinary", href: "/compliance/disciplinary" },
            { label: `Case ${id || "—"}` },
          ]}
        />
        <div className="rounded-xl border border-border bg-card p-6">
          <Text variant="body" as="h2" className="mb-4 font-semibold text-foreground">Case details</Text>
          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Case #</dt>
              <dd className="mt-1 text-sm text-foreground">DC-{id}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Employee</dt>
              <dd className="mt-1 text-sm text-foreground">Juan Dela Cruz</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Status</dt>
              <dd className="mt-1 text-sm text-foreground">Open</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-muted-foreground">NTE issued</dt>
              <dd className="mt-1 text-sm text-foreground">Feb 15, 2026</dd>
            </div>
          </dl>
        </div>
      </div>
    </DashboardShell>
  );
}
