"use client";

import { Text } from "@/components/atoms";
import { PortalShell } from "../../../../_components/PortalShell";

export default function PortalRequestsLeaveNewPage() {
  return (
    <PortalShell>
      <div>
        <Text variant="body" as="p" className="text-muted-foreground">
          Apply leave — mock data.
        </Text>
      </div>
    </PortalShell>
  );
}
