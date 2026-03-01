"use client";

import { Badge, Button, FaIcon, Link, Surface, Text } from "@/components/atoms";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/utils";
import type { PortalPayslipCardProps } from "./PortalPayslipCard.types";

export function PortalPayslipCard({
  periodLabel,
  statusLabel,
  statusVariant = "success",
  grossPay,
  deductions,
  netPay,
  breakdown,
  viewAllHref,
  onDownload,
  className,
}: PortalPayslipCardProps) {
  return (
    <Surface
      elevation="none"
      className={cn("rounded-xl border border-border p-5", className)}
      role="region"
      aria-label="Latest payslip"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <Text variant="label" as="h3" className="font-semibold">
            Latest Payslip
          </Text>
          <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
            {periodLabel}
          </Text>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={statusVariant}>{statusLabel}</Badge>
          {onDownload != null && (
            <Button variant="outline" size="sm" onClick={onDownload}>
              <FaIcon icon={faFileArrowDown} size="xs" className="mr-1.5" />
              Download PDF
            </Button>
          )}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-muted/50 p-3.5">
          <Text variant="caption" as="p" className="mb-1 text-muted-foreground">
            Gross Pay
          </Text>
          <Text variant="heading" as="p" className="text-lg font-bold">
            {grossPay}
          </Text>
        </div>
        <div className="rounded-xl bg-destructive/10 p-3.5">
          <Text variant="caption" as="p" className="mb-1 text-destructive">
            Deductions
          </Text>
          <Text variant="heading" as="p" className="text-lg font-bold text-destructive">
            − {deductions}
          </Text>
        </div>
        <div className="rounded-xl bg-success/10 p-3.5">
          <Text variant="caption" as="p" className="mb-1 text-success">
            Net Pay
          </Text>
          <Text variant="heading" as="p" className="text-lg font-bold text-success">
            {netPay}
          </Text>
        </div>
      </div>

      <div className="space-y-0">
        {breakdown.map((line, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center justify-between py-1.5 text-xs",
              i < breakdown.length - 1 && "border-b border-border"
            )}
          >
            <Text variant="caption" as="span" className={line.isDeduction ? "text-destructive" : "text-muted-foreground"}>
              {line.label}
            </Text>
            <Text
              variant="caption"
              as="span"
              className={cn("font-medium", line.isDeduction && "text-destructive")}
            >
              {line.isDeduction ? "− " : ""}{line.amount}
            </Text>
          </div>
        ))}
      </div>

      {viewAllHref != null && (
        <Link
          href={viewAllHref}
          variant="muted"
          className="mt-4 block rounded-lg border border-border py-2 text-center text-xs font-medium hover:bg-muted/50"
        >
          View all payslips →
        </Link>
      )}
    </Surface>
  );
}
