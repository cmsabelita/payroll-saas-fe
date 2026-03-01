"use client";

import { Text } from "@/components/atoms";
import { PortalShell } from "../../../../_components/PortalShell";

export default function PortalRequestsAttendanceNewPage() {
  return (
    <PortalShell>
      <div>
        <Text variant="body" as="p" className="text-muted-foreground">
          Request attendance correction — mock data.
        </Text>
      </div>
    </PortalShell>
  );
}
