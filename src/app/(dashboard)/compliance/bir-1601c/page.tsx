"use client";

import { Avatar, Button, FaIcon, IconButton, Text } from "@/components/atoms";
import { SettingsLayout } from "@/components/organisms";
import { faBell, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DashboardShell } from "../../_components/DashboardShell";
import { ComplianceNav } from "../_lib/complianceNav";

export default function ComplianceBir1601cPage() {
  const [month, setMonth] = useState("2026-02");

  const nav = <ComplianceNav currentHref="/compliance/bir-1601c" />;

  return (
    <DashboardShell
      topbarTitle="Compliance"
      topbarSubtitle="Withholding tax monthly remittance"
      topbarTrailing={
        <>
          <IconButton variant="ghost" size="sm" aria-label="Notifications">
            <FaIcon icon={faBell} size="sm" />
          </IconButton>
          <Avatar size="sm" fallback="MS" />
        </>
      }
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <SettingsLayout nav={nav}>
          <div className="flex flex-wrap items-center gap-3">
            <select
              className="w-36 rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="2026-02">Feb 2026</option>
              <option value="2026-01">Jan 2026</option>
            </select>
            <Button variant="secondary" size="md" className="gap-2">
              <FaIcon icon={faFileExcel} size="sm" aria-hidden />
              Export
            </Button>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <Text variant="body" as="h2" className="mb-2 font-semibold text-foreground">BIR 1601-C — {month}</Text>
            <Text variant="caption" as="p" className="text-muted-foreground">
              Monthly remittance of withholding tax. Generate for the selected period.
            </Text>
          </div>
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
