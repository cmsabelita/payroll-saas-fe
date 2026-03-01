"use client";

import { Text } from "@/components/atoms";

export default function OnboardingCompanyPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-6">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8">
        <Text variant="heading" as="h1" className="mb-2">
          Company
        </Text>
        <Text variant="body" as="p" className="text-muted-foreground">
          Onboarding — company step. Mock data.
        </Text>
      </div>
    </div>
  );
}
