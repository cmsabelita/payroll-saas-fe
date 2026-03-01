"use client";

import { Text } from "@/components/atoms";
import { DashboardShell } from "./DashboardShell";

export interface PlaceholderPageProps {
  title: string;
  subtitle?: string;
}

export function PlaceholderPage({ title, subtitle }: PlaceholderPageProps) {
  return (
    <DashboardShell topbarTitle={title} topbarSubtitle={subtitle}>
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <Text variant="body" as="p" className="text-muted-foreground">
          {subtitle ?? `${title} — mock data. Implement per plan.`}
        </Text>
      </div>
    </DashboardShell>
  );
}
