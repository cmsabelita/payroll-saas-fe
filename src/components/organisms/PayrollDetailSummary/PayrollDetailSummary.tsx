"use client";

import { FaIcon, Text } from "@/components/atoms";
import { cn } from "@/utils";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import type { PayrollDetailStep } from "@/data/mocks/mockPayroll";
import type { PayrollDetailSummaryProps } from "./PayrollDetailSummary.types";

const STEPS: PayrollDetailStep[] = [
  "draft",
  "processing",
  "computed",
  "approved",
  "paid",
];

const STEP_LABELS: Record<PayrollDetailStep, string> = {
  draft: "Draft",
  processing: "Processing",
  computed: "Computed",
  approved: "Approved",
  paid: "Paid",
};

function formatCurrency(value: number): string {
  return `₱ ${value.toLocaleString("en-PH")}`;
}

export function PayrollDetailSummary({
  currentStep,
  stepCaption,
  totalGrossPay,
  totalDeductions,
  totalNetPay,
  withholdingTax,
  employeeCount,
  deductionsBadge = "SSS · PH · HDMF · WHT",
  netPayBadge = "To be disbursed",
  withholdingBadge = "For BIR 1601-C",
  className,
}: PayrollDetailSummaryProps) {
  const currentIndex = STEPS.indexOf(currentStep);
  const gridCols = STEPS.flatMap((_, i) =>
    i < STEPS.length - 1 ? ["auto", "1fr"] : ["auto"]
  ).join(" ");

  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <div className="rounded-xl border border-border bg-card px-8 py-5">
        <div
          className="grid max-w-2xl items-center pb-5"
          style={{ gridTemplateColumns: gridCols }}
        >
          {STEPS.flatMap((step, i) => {
            const isDone = i < currentIndex;
            const isActive = i === currentIndex;
            const isPending = i > currentIndex;
            const stepCell = (
              <div
                key={step}
                className="relative flex h-8 w-8 flex-col items-center"
              >
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                    isDone && "bg-primary/15 text-primary",
                    isActive && "bg-primary text-primary-foreground",
                    isPending && "bg-muted text-muted-foreground"
                  )}
                >
                  {isDone ? (
                    <FaIcon icon={faCheck} size="xs" />
                  ) : (
                    i + 1
                  )}
                </div>
                <Text
                  variant="caption"
                  as="span"
                  className={cn(
                    "absolute top-full left-1/2 mt-0.5 w-max max-w-[5rem] -translate-x-1/2 text-center text-xs whitespace-nowrap",
                    isActive && "font-semibold text-primary",
                    isPending && "text-muted-foreground"
                  )}
                >
                  {STEP_LABELS[step]}
                </Text>
              </div>
            );
            const connector =
              i < STEPS.length - 1 ? (
                <div
                  key={`${step}-connector`}
                  className="flex h-8 items-center"
                >
                  <div
                    className={cn(
                    "w-full border-t-2",
                    i < currentIndex ? "border-primary/30" : "border-border"
                  )}
                  />
                </div>
              ) : null;
            return connector != null ? [stepCell, connector] : [stepCell];
          })}
        </div>
        {stepCaption != null && (
          <Text variant="caption" as="p" className="mt-4 text-muted-foreground">
            {stepCaption}
          </Text>
        )}
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-xl border border-border bg-card p-4">
          <Text variant="caption" as="p" className="mb-1 text-muted-foreground">
            Total Gross Pay
          </Text>
          <Text variant="body" as="p" className="text-xl font-bold text-foreground">
            {formatCurrency(totalGrossPay)}
          </Text>
          <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
            {employeeCount} employees
          </Text>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <Text variant="caption" as="p" className="mb-1 text-muted-foreground">
            Total Deductions
          </Text>
          <Text variant="body" as="p" className="text-xl font-bold text-destructive">
            {formatCurrency(totalDeductions)}
          </Text>
          <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
            {deductionsBadge}
          </Text>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <Text variant="caption" as="p" className="mb-1 text-muted-foreground">
            Total Net Pay
          </Text>
          <Text variant="body" as="p" className="text-xl font-bold text-primary">
            {formatCurrency(totalNetPay)}
          </Text>
          <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
            {netPayBadge}
          </Text>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <Text variant="caption" as="p" className="mb-1 text-muted-foreground">
            Withholding Tax
          </Text>
          <Text variant="body" as="p" className="text-xl font-bold text-foreground">
            {formatCurrency(withholdingTax)}
          </Text>
          <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
            {withholdingBadge}
          </Text>
        </div>
      </div>
    </div>
  );
}
