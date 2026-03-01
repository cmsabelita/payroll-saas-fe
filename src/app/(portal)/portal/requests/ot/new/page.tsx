"use client";

import { Text } from "@/components/atoms";
import { PortalShell } from "../../../../_components/PortalShell";

export default function PortalRequestsOtNewPage() {
  return (
    <PortalShell>
      <div>
        <Text variant="body" as="p" className="text-muted-foreground">
          File OT — mock data.
        </Text>
      </div>
    </PortalShell>
  );
}
