"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { SettingsLayout } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { DashboardShell } from "../../_components/DashboardShell";
import { SettingsNav } from "../_lib/settingsNav";

export default function SettingsPayrollConfigPage() {
  return (
    <DashboardShell
      topbarTitle="Settings"
      topbarSubtitle="Payroll configuration"
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
        <SettingsLayout nav={<SettingsNav currentHref="/settings/payroll-config" />}>
          <div className="rounded-xl border border-border bg-card p-6">
            <Text variant="body" as="h2" className="mb-2 font-semibold text-foreground">Pay frequency</Text>
            <Text variant="caption" as="p" className="mb-4 text-muted-foreground">
              Semi-monthly (15th and end of month). Cut-off: 2 days before pay date.
            </Text>
          </div>
          <div className="mt-5 rounded-xl border border-border bg-card p-6">
            <Text variant="body" as="h2" className="mb-2 font-semibold text-foreground">Default contributions</Text>
            <Text variant="caption" as="p" className="text-muted-foreground">
              SSS, PhilHealth, and Pag-IBIG use current agency rates. Configure per employee if needed.
            </Text>
          </div>
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
