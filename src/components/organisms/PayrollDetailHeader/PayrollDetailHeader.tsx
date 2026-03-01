"use client";

import { Badge, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { PayrollRunStatus } from "@/data/mocks/mockPayroll";
import type { PayrollDetailHeaderProps } from "./PayrollDetailHeader.types";

const STATUS_VARIANT: Record<
  PayrollRunStatus,
  "default" | "secondary" | "success" | "warning" | "outline"
> = {
  draft: "secondary",
  processing: "warning",
  computed: "outline",
  approved: "success",
  paid: "default",
};

function getVariant(
  status: PayrollRunStatus
): "default" | "secondary" | "success" | "warning" | "outline" {
  return STATUS_VARIANT[status] ?? "secondary";
}

export function PayrollDetailHeader({
  periodLabel,
  status,
  className,
}: PayrollDetailHeaderProps) {
  const label =
    status.charAt(0).toUpperCase() + status.slice(1);
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Text variant="body" as="span" className="font-semibold text-foreground">
        {periodLabel}
      </Text>
      <Badge variant={getVariant(status)}>{label}</Badge>
    </div>
  );
}
