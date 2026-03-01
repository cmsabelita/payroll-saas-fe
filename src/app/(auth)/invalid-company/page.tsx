"use client";

import { Button, Text } from "@/components/atoms";
import NextLink from "next/link";

export default function InvalidCompanyPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 p-6">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center">
        <Text variant="heading" as="h1" className="mb-2">
          Invalid Company
        </Text>
        <Text variant="body" as="p" className="mb-6 text-muted-foreground">
          This company link is invalid or has expired. Please contact support or try logging in again.
        </Text>
        <NextLink href="/login">
          <Button variant="primary">Back to Login</Button>
        </NextLink>
      </div>
    </div>
  );
}
