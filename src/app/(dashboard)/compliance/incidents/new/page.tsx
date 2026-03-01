"use client";

import { Avatar, Button, buttonVariants, FaIcon, IconButton, Input, Text } from "@/components/atoms";
import { cn } from "@/utils";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ComplianceBreadcrumb } from "../../_components/ComplianceBreadcrumb";
import { DashboardShell } from "../../../_components/DashboardShell";

export default function ComplianceIncidentsNewPage() {
  const router = useRouter();
  const [summary, setSummary] = useState("");
  const [date, setDate] = useState("");

  return (
    <DashboardShell
      topbarTitle="New Incident"
      topbarSubtitle="Report an incident"
      topbarTrailing={
        <>
          <IconButton variant="ghost" size="sm" aria-label="Notifications">
            <FaIcon icon={faBell} size="sm" />
          </IconButton>
          <Avatar size="sm" fallback="MS" />
        </>
      }
    >
      <div className="mx-auto flex max-w-xl flex-col gap-6">
        <ComplianceBreadcrumb
          segments={[
            { label: "Compliance", href: "/compliance" },
            { label: "Incidents", href: "/compliance/incidents" },
            { label: "New" },
          ]}
        />
        <div className="rounded-xl border border-border bg-card p-6">
          <Text variant="body" as="h2" className="mb-4 font-semibold text-foreground">Incident details</Text>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Date</label>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} size="md" className="w-full" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Summary</label>
              <Input value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Brief description" size="md" className="w-full" />
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <Button onClick={() => router.push("/compliance/incidents")}>Save</Button>
            <NextLink href="/compliance/incidents" className={cn(buttonVariants({ variant: "outline", size: "md" }))}>
              Cancel
            </NextLink>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
