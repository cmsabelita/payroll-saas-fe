"use client";

import { Badge, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { ApprovalsDetailSectionProps } from "./ApprovalsDetailSection.types";

const STATUS_VARIANT: Record<ApprovalsDetailSectionProps["status"], "warning" | "success" | "destructive"> = {
  pending: "warning",
  approved: "success",
  rejected: "destructive",
};

export function ApprovalsDetailSection({
  requestType,
  requesterName,
  requesterEmail,
  status,
  submittedAt,
  period,
  details,
  className,
}: ApprovalsDetailSectionProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="rounded-xl border border-border bg-card p-6">
        <Text variant="body" as="h2" className="mb-4 font-semibold text-foreground">Request Details</Text>
        <dl className="grid grid-cols-2 gap-4">
          <div>
            <dt className="text-xs font-medium text-muted-foreground">Type</dt>
            <dd className="mt-1 text-sm text-foreground">{requestType}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-muted-foreground">Status</dt>
            <dd className="mt-1"><Badge variant={STATUS_VARIANT[status]}>{status}</Badge></dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-muted-foreground">Requester</dt>
            <dd className="mt-1 text-sm text-foreground">{requesterName}</dd>
            {requesterEmail != null && <dd className="text-xs text-muted-foreground">{requesterEmail}</dd>}
          </div>
          <div>
            <dt className="text-xs font-medium text-muted-foreground">Submitted</dt>
            <dd className="mt-1 text-sm text-foreground">{submittedAt}</dd>
          </div>
          {period != null && (
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Period</dt>
              <dd className="mt-1 text-sm text-foreground">{period}</dd>
            </div>
          )}
        </dl>
        {details != null && (
          <div className="mt-4 pt-4 border-t border-border">
            <dt className="text-xs font-medium text-muted-foreground">Details</dt>
            <dd className="mt-1 text-sm text-foreground">{details}</dd>
          </div>
        )}
      </div>
    </div>
  );
}
