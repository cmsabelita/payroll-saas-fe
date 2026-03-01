"use client";

import { Avatar, Button, FaIcon, IconButton, Text } from "@/components/atoms";
import { SettingsLayout } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { DashboardShell } from "../../_components/DashboardShell";
import { SettingsNav } from "../_lib/settingsNav";

export default function SettingsBillingPage() {
  return (
    <DashboardShell
      topbarTitle="Settings"
      topbarSubtitle="Billing & plan"
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
        <SettingsLayout nav={<SettingsNav currentHref="/settings/billing" />}>
          <div className="rounded-xl border border-border bg-card p-6">
            <Text variant="body" as="h2" className="mb-2 font-semibold text-foreground">Current plan</Text>
            <Text variant="caption" as="p" className="mb-4 text-muted-foreground">
              Professional — 87 employees. Renews Mar 1, 2026.
            </Text>
            <Button variant="outline" size="md">Change plan</Button>
          </div>
          <div className="mt-5 rounded-xl border border-border bg-card p-6">
            <Text variant="body" as="h2" className="mb-2 font-semibold text-foreground">Payment method</Text>
            <Text variant="caption" as="p" className="mb-4 text-muted-foreground">
              •••• 4242 — Expires 12/27
            </Text>
            <Button variant="outline" size="md">Update payment</Button>
          </div>
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
