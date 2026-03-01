"use client";

import { Avatar, Button, buttonVariants, FaIcon, IconButton, Input, Text } from "@/components/atoms";
import { cn } from "@/utils";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ComplianceBreadcrumb } from "../../_components/ComplianceBreadcrumb";
import { DashboardShell } from "../../../_components/DashboardShell";

export default function ComplianceTrainingNewPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");

  return (
    <DashboardShell
      topbarTitle="New Training"
      topbarSubtitle="Add training record"
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
            { label: "Training", href: "/compliance/training" },
            { label: "New" },
          ]}
        />
        <div className="rounded-xl border border-border bg-card p-6">
          <Text variant="body" as="h2" className="mb-4 font-semibold text-foreground">Training details</Text>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Training name</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Safety orientation" size="md" className="w-full" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Due date</label>
              <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} size="md" className="w-full" />
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <Button onClick={() => router.push("/compliance/training")}>Save</Button>
            <NextLink href="/compliance/training" className={cn(buttonVariants({ variant: "outline", size: "md" }))}>
              Cancel
            </NextLink>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
