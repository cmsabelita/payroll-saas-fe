"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { SettingsLayout } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { DashboardShell } from "../../_components/DashboardShell";
import { SettingsNav } from "../_lib/settingsNav";

const MOCK_INTEGRATIONS = [
  { name: "Slack", description: "Notifications and reminders", connected: true },
  { name: "Google Workspace", description: "Calendar and directory", connected: false },
];

export default function SettingsIntegrationsPage() {
  return (
    <DashboardShell
      topbarTitle="Settings"
      topbarSubtitle="Integrations"
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
        <SettingsLayout nav={<SettingsNav currentHref="/settings/integrations" />}>
          <div className="rounded-xl border border-border bg-card p-6">
            <Text variant="body" as="h2" className="mb-4 font-semibold text-foreground">Connected apps</Text>
            <div className="space-y-3">
              {MOCK_INTEGRATIONS.map((i) => (
                <div key={i.name} className="flex items-center justify-between rounded-lg border border-border py-3 px-4">
                  <div>
                    <Text variant="body" as="p" className="font-medium text-foreground">{i.name}</Text>
                    <Text variant="caption" as="p" className="text-muted-foreground">{i.description}</Text>
                  </div>
                  <span className={`text-xs font-medium ${i.connected ? "text-primary" : "text-muted-foreground"}`}>
                    {i.connected ? "Connected" : "Not connected"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
