"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { SettingsLayout } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { DashboardShell } from "../../_components/DashboardShell";
import { SettingsNav } from "../_lib/settingsNav";

export default function SettingsTeamPage() {
  return (
    <DashboardShell
      topbarTitle="Settings"
      topbarSubtitle="Team access"
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
        <SettingsLayout nav={<SettingsNav currentHref="/settings/team" />}>
          <div className="rounded-xl border border-border bg-card p-6">
            <Text variant="body" as="h2" className="mb-2 font-semibold text-foreground">Team members</Text>
            <Text variant="caption" as="p" className="mb-4 text-muted-foreground">
              Manage who has access to the Payro dashboard. Invite members and assign roles.
            </Text>
            <NextLink
              href="/team"
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-110"
            >
              Go to Team
            </NextLink>
          </div>
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
