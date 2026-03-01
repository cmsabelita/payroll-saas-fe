"use client";

import { Button, Text } from "@/components/atoms";
import { cn } from "@/utils";
import NextLink from "next/link";
import type { PayrollDetailActionsProps } from "./PayrollDetailActions.types";

export function PayrollDetailActions({
  title,
  description,
  onApprove,
  viewEmployeesHref,
  adjustmentsHref,
  onRejectToDraft,
  showApprove = true,
  showReject = true,
  className,
}: PayrollDetailActionsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card px-5 py-4",
        className
      )}
    >
      <div className="flex-1 min-w-0">
        <Text variant="body" as="p" className="font-semibold text-foreground">
          {title}
        </Text>
        {description != null && (
          <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
            {description}
          </Text>
        )}
      </div>
      {showApprove && onApprove != null && (
        <Button variant="primary" size="md" onClick={onApprove}>
          Approve Payroll
        </Button>
      )}
      {viewEmployeesHref != null && (
        <NextLink
          href={viewEmployeesHref}
          className="inline-flex items-center justify-center rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/80"
        >
          View All Employees
        </NextLink>
      )}
      {adjustmentsHref != null && (
        <NextLink
          href={adjustmentsHref}
          className="inline-flex items-center justify-center rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/80"
        >
          Adjustments
        </NextLink>
      )}
      {showReject && onRejectToDraft != null && (
        <Button
          variant="destructive"
          size="md"
          className="border border-destructive/30 bg-background hover:bg-destructive/10"
          onClick={onRejectToDraft}
        >
          Reject to Draft
        </Button>
      )}
    </div>
  );
}
