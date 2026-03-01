"use client";

import { Avatar, Button, buttonVariants, FaIcon, IconButton, Input, Text } from "@/components/atoms";
import { cn } from "@/utils";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ComplianceBreadcrumb } from "../../_components/ComplianceBreadcrumb";
import { DashboardShell } from "../../../_components/DashboardShell";

export default function ComplianceDisciplinaryNewPage() {
  const router = useRouter();
  const [employeeId, setEmployeeId] = useState("");
  const [offense, setOffense] = useState("");

  return (
    <DashboardShell
      topbarTitle="New Disciplinary"
      topbarSubtitle="Issue NTE or record"
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
            { label: "Disciplinary", href: "/compliance/disciplinary" },
            { label: "New" },
          ]}
        />
        <div className="rounded-xl border border-border bg-card p-6">
          <Text variant="body" as="h2" className="mb-4 font-semibold text-foreground">Disciplinary record</Text>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Employee</label>
              <Input value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} placeholder="Search or select" size="md" className="w-full" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Offense / NTE summary</label>
              <Input value={offense} onChange={(e) => setOffense(e.target.value)} placeholder="Brief description" size="md" className="w-full" />
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <Button onClick={() => router.push("/compliance/disciplinary")}>Save</Button>
            <NextLink href="/compliance/disciplinary" className={cn(buttonVariants({ variant: "outline", size: "md" }))}>
              Cancel
            </NextLink>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
