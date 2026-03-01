"use client";

import { Badge, Text } from "@/components/atoms";
import { ProfileHeader, UnderlineTabs } from "@/components/molecules";
import { PortalShell } from "../../_components/PortalShell";
import { useState } from "react";

const PROFILE = {
  name: "Juan dela Cruz",
  subtitle: "Software Engineer · EMP-0042 · Engineering",
  badges: ["Engineering", "Active"],
  joined: "Joined March 1, 2025",
  personal: [
    { label: "First Name", value: "Juan" },
    { label: "Last Name", value: "dela Cruz" },
    { label: "Middle Name", value: "Santos" },
    { label: "Date of Birth", value: "June 15, 1992" },
    { label: "Civil Status", value: "Single" },
    { label: "Gender", value: "Male" },
    { label: "Blood Type", value: "O+" },
    { label: "Address", value: "12 Sampaguita St., Quezon City, Metro Manila" },
  ],
  contact: [
    { label: "Mobile", value: "+63 917 555 0123" },
    { label: "Personal Email", value: "juan.delacruz@gmail.com" },
    { label: "Work Email", value: "juan.delacruz@acmecorp.com" },
  ],
  emergency: [
    { label: "Name", value: "Maria dela Cruz (Mother)" },
    { label: "Mobile", value: "+63 919 555 0001" },
    { label: "Relationship", value: "Mother" },
  ],
};

const TABS = [
  { key: "personal", label: "Personal Info" },
  { key: "employment", label: "Employment" },
  { key: "government", label: "Government IDs" },
  { key: "account", label: "Account Settings" },
];

function InfoSection({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; value: string }[];
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <Text variant="label" as="h2" className="mb-4 font-semibold text-foreground">
        {title}
      </Text>
      <div className="space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start gap-3">
            <span className="w-32 shrink-0 pt-0.5 text-xs text-muted-foreground">{row.label}</span>
            <span className="text-sm font-medium text-foreground">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PortalProfilePage() {
  const [tab, setTab] = useState("personal");

  return (
    <PortalShell>
      <div className="flex flex-col gap-6">
        <div className="rounded-xl border border-border bg-card p-6">
          <ProfileHeader
            avatar={
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                JC
              </div>
            }
            name={PROFILE.name}
            subtitle={PROFILE.subtitle}
            badges={
              <>
                <Badge variant="secondary">{PROFILE.badges[0]}</Badge>
                <Badge variant="success">{PROFILE.badges[1]}</Badge>
                <Text variant="caption" as="span" className="text-muted-foreground">
                  {PROFILE.joined}
                </Text>
              </>
            }
            actions={
              <button
                type="button"
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
              >
                Edit Personal Info
              </button>
            }
          />
        </div>

        <UnderlineTabs tabs={TABS} value={tab} onChange={setTab} className="mb-6" />

        {tab === "personal" && (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <InfoSection title="Personal Details" rows={PROFILE.personal} />
            <div className="space-y-5">
              <InfoSection title="Contact Information" rows={PROFILE.contact} />
              <InfoSection title="Emergency Contact" rows={PROFILE.emergency} />
            </div>
          </div>
        )}

        {tab === "employment" && (
          <div className="rounded-xl border border-border bg-card p-5">
            <Text variant="label" as="h2" className="mb-4 font-semibold text-foreground">
              Employment
            </Text>
            <Text variant="body" as="p" className="text-muted-foreground">
              Employment details (job title, department, start date, etc.) — mock data.
            </Text>
          </div>
        )}

        {tab === "government" && (
          <div className="rounded-xl border border-border bg-card p-5">
            <Text variant="label" as="h2" className="mb-4 font-semibold text-foreground">
              Government IDs
            </Text>
            <Text variant="body" as="p" className="text-muted-foreground">
              SSS, PhilHealth, Pag-IBIG, TIN — mock data.
            </Text>
          </div>
        )}

        {tab === "account" && (
          <div className="rounded-xl border border-border bg-card p-5">
            <Text variant="label" as="h2" className="mb-4 font-semibold text-foreground">
              Account Settings
            </Text>
            <Text variant="body" as="p" className="text-muted-foreground">
              Password, notifications, security — mock data.
            </Text>
          </div>
        )}
      </div>
    </PortalShell>
  );
}
