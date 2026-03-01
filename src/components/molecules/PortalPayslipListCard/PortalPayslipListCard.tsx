"use client";

import { Badge, Button, FaIcon, Text } from "@/components/atoms";
import { cn } from "@/utils";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import type { PortalPayslipListCardProps } from "./PortalPayslipListCard.types";

export function PortalPayslipListCard({
  periodLabel,
  payDate,
  status,
  statusVariant = "success",
  grossPay,
  netPay,
  viewHref,
  onDownloadPdf,
  className,
}: PortalPayslipListCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-5 transition hover:border-primary/30",
        className
      )}
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <Text variant="body" as="p" className="font-semibold text-foreground">
            {periodLabel}
          </Text>
          <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
            Pay Date: {payDate}
          </Text>
        </div>
        <Badge variant={statusVariant}>{status}</Badge>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-3">
        <div>
          <Text variant="caption" as="p" className="text-muted-foreground">
            Gross Pay
          </Text>
          <Text variant="body" as="p" className="font-semibold text-foreground">
            {grossPay}
          </Text>
        </div>
        <div>
          <Text variant="caption" as="p" className="text-muted-foreground">
            Net Pay
          </Text>
          <Text variant="body" as="p" className="font-semibold text-primary">
            {netPay}
          </Text>
        </div>
      </div>
      <div className="flex gap-2">
        <NextLink
          href={viewHref}
          className="flex-1 rounded-lg border border-border py-2 text-center text-sm font-medium text-foreground hover:bg-muted/50"
        >
          View Payslip
        </NextLink>
        {onDownloadPdf != null && (
          <Button
            variant="outline"
            size="md"
            className="flex-1 gap-1.5"
            onClick={onDownloadPdf}
          >
            <FaIcon icon={faFileArrowDown} size="sm" aria-hidden />
            PDF
          </Button>
        )}
      </div>
    </div>
  );
}
