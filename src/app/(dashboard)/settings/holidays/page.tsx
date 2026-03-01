"use client";

import { Avatar, Button, FaIcon, IconButton, Text } from "@/components/atoms";
import { SettingsLayout } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { DashboardShell } from "../../_components/DashboardShell";
import { SettingsNav } from "../_lib/settingsNav";

const MOCK_HOLIDAYS = [
  { date: "Jan 1", name: "New Year's Day", type: "Regular" },
  { date: "Apr 9", name: "Araw ng Kagitingan", type: "Regular" },
  { date: "Dec 25", name: "Christmas Day", type: "Special" },
];

export default function SettingsHolidaysPage() {
  return (
    <DashboardShell
      topbarTitle="Settings"
      topbarSubtitle="Holidays"
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
        <SettingsLayout nav={<SettingsNav currentHref="/settings/holidays" />}>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <Text variant="body" as="h2" className="font-semibold text-foreground">Company holidays</Text>
              <Button size="md">Add holiday</Button>
            </div>
            <div className="space-y-2">
              {MOCK_HOLIDAYS.map((h) => (
                <div key={h.date} className="flex items-center justify-between rounded-lg border border-border py-2 px-3">
                  <span className="text-sm font-medium text-foreground">{h.name}</span>
                  <span className="text-sm text-muted-foreground">{h.date} · {h.type}</span>
                </div>
              ))}
            </div>
          </div>
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
