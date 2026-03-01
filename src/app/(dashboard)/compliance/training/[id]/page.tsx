"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";
import { ComplianceBreadcrumb } from "../../_components/ComplianceBreadcrumb";
import { DashboardShell } from "../../../_components/DashboardShell";

export default function ComplianceTrainingDetailPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";

  return (
    <DashboardShell
      topbarTitle="Training Record"
      topbarSubtitle="Training details"
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
            { label: "Training", href: "/compliance/training" },
            { label: `Record ${id || "—"}` },
          ]}
        />
        <div className="rounded-xl border border-border bg-card p-6">
          <Text variant="body" as="h2" className="mb-4 font-semibold text-foreground">Training details</Text>
          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Name</dt>
              <dd className="mt-1 text-sm text-foreground">Safety orientation</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Type</dt>
              <dd className="mt-1 text-sm text-foreground">Mandatory</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Due date</dt>
              <dd className="mt-1 text-sm text-foreground">Mar 15, 2026</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Status</dt>
              <dd className="mt-1 text-sm text-foreground">Pending</dd>
            </div>
          </dl>
        </div>
      </div>
    </DashboardShell>
  );
}
