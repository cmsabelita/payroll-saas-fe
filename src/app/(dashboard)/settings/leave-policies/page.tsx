"use client";

import { Avatar, Button, FaIcon, IconButton, Text } from "@/components/atoms";
import { SettingsLayout } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { DashboardShell } from "../../_components/DashboardShell";
import { SettingsNav } from "../_lib/settingsNav";

const MOCK_POLICIES = [
  { name: "Vacation leave", days: 15, accrual: "Annual" },
  { name: "Sick leave", days: 15, accrual: "Annual" },
  { name: "Emergency leave", days: 5, accrual: "Annual" },
];

export default function SettingsLeavePoliciesPage() {
  return (
    <DashboardShell
      topbarTitle="Settings"
      topbarSubtitle="Leave policies"
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
        <SettingsLayout nav={<SettingsNav currentHref="/settings/leave-policies" />}>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <Text variant="body" as="h2" className="font-semibold text-foreground">Leave types</Text>
              <Button size="md">Add policy</Button>
            </div>
            <div className="space-y-2">
              {MOCK_POLICIES.map((p) => (
                <div key={p.name} className="flex items-center justify-between rounded-lg border border-border py-2 px-3">
                  <span className="text-sm font-medium text-foreground">{p.name}</span>
                  <span className="text-sm text-muted-foreground">{p.days} days · {p.accrual}</span>
                </div>
              ))}
            </div>
          </div>
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
