"use client";

import { Button, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { PayrollEmployeeBreakdownProps } from "./PayrollEmployeeBreakdown.types";

function formatCurrency(value: number): string {
  return `₱ ${value.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;
}

export function PayrollEmployeeBreakdown({
  employeeId,
  name,
  position,
  department,
  payPeriod,
  payDate,
  grossPay,
  totalDeductions,
  netPay,
  earnings,
  deductions,
  onDownloadPdf,
  className,
}: PayrollEmployeeBreakdownProps) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="border-b border-border bg-primary/5 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Text variant="body" as="p" className="font-bold text-foreground">
                Payslip Preview
              </Text>
              <Text variant="caption" as="p" className="text-muted-foreground">
                {payPeriod} · Pay date: {payDate}
              </Text>
            </div>
            {onDownloadPdf != null && (
              <Button variant="secondary" size="md" onClick={onDownloadPdf}>
                Download PDF
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 border-b border-border bg-muted/20 px-8 py-4">
          <div className="flex flex-col gap-1">
            <InfoRow label="Employee" value={name} />
            <InfoRow label="Employee No." value={employeeId} />
            <InfoRow label="Position" value={position} />
            <InfoRow label="Department" value={department} />
          </div>
          <div className="flex flex-col gap-1">
            <InfoRow label="Pay Period" value={payPeriod} />
            <InfoRow label="Pay Date" value={payDate} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 px-8 py-5 border-b border-border">
          <div>
            <Text variant="caption" as="p" className="mb-3 font-bold uppercase tracking-wide text-muted-foreground">
              Earnings
            </Text>
            <div className="space-y-1 border-b border-border pb-2">
              {earnings.map((e) => (
                <div key={e.label} className="flex justify-between py-1.5">
                  <Text variant="body" as="span" className="text-muted-foreground">
                    {e.label}
                  </Text>
                  <Text variant="body" as="span" className="font-medium text-foreground">
                    {formatCurrency(e.amount)}
                  </Text>
                </div>
              ))}
            </div>
            <div className="flex justify-between pt-2 font-bold">
              <Text variant="body" as="span">Total Gross</Text>
              <Text variant="body" as="span">{formatCurrency(grossPay)}</Text>
            </div>
          </div>
          <div>
            <Text variant="caption" as="p" className="mb-3 font-bold uppercase tracking-wide text-muted-foreground">
              Deductions
            </Text>
            <div className="space-y-1 border-b border-border pb-2">
              {deductions.map((d) => (
                <div key={d.label} className="flex justify-between py-1.5">
                  <Text variant="body" as="span" className="text-muted-foreground">
                    {d.label}
                  </Text>
                  <Text variant="body" as="span" className="font-medium text-destructive">
                    {formatCurrency(d.amount)}
                  </Text>
                </div>
              ))}
            </div>
            <div className="flex justify-between pt-2 font-bold">
              <Text variant="body" as="span">Total Deductions</Text>
              <Text variant="body" as="span" className="text-destructive">
                {formatCurrency(totalDeductions)}
              </Text>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-8 py-4 bg-primary/5 border-t-2 border-border">
          <Text variant="body" as="p" className="font-bold text-foreground">
            Net Pay
          </Text>
          <Text variant="body" as="p" className="font-bold text-primary">
            {formatCurrency(netPay)}
          </Text>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <Text variant="caption" as="span" className="w-24 shrink-0 text-muted-foreground">
        {label}
      </Text>
      <Text variant="caption" as="span" className="font-medium text-foreground">
        {value}
      </Text>
    </div>
  );
}
