"use client";

import { Avatar, Button, buttonVariants, FaIcon, IconButton, Input, Text } from "@/components/atoms";
import { cn } from "@/utils";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ComplianceBreadcrumb } from "../../_components/ComplianceBreadcrumb";
import { DashboardShell } from "../../../_components/DashboardShell";

export default function ComplianceRemittancesNewPage() {
  const router = useRouter();
  const [agency, setAgency] = useState("");
  const [period, setPeriod] = useState("");

  return (
    <DashboardShell
      topbarTitle="New Remittance"
      topbarSubtitle="Record remittance"
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
            { label: "Remittances", href: "/compliance/remittances" },
            { label: "New" },
          ]}
        />
        <div className="rounded-xl border border-border bg-card p-6">
          <Text variant="body" as="h2" className="mb-4 font-semibold text-foreground">Remittance details</Text>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Agency</label>
              <select
                className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
                value={agency}
                onChange={(e) => setAgency(e.target.value)}
              >
                <option value="">Select</option>
                <option value="sss">SSS</option>
                <option value="philhealth">PhilHealth</option>
                <option value="pagibig">Pag-IBIG</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Period</label>
              <Input type="month" value={period} onChange={(e) => setPeriod(e.target.value)} size="md" className="w-full" />
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <Button onClick={() => router.push("/compliance/remittances")}>Save</Button>
            <NextLink href="/compliance/remittances" className={cn(buttonVariants({ variant: "outline", size: "md" }))}>
              Cancel
            </NextLink>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
