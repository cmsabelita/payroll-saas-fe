"use client";

import { Button, FaIcon, Text } from "@/components/atoms";
import { PortalPayslipListCard } from "@/components/molecules";
import { PortalShell } from "../../_components/PortalShell";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const MOCK_EMPLOYEE = "Juan dela Cruz · Software Engineer · EMP-0042";

const YTD_2024 = {
  totalGross: "₱333,424.72",
  totalDeductions: "₱44,908.72",
  totalNetPay: "₱288,516.00",
  taxWithheld: "₱31,700.00",
};

const PAYSLIPS = [
  { id: "1", period: "April 2026", payDate: "April 30, 2026", status: "Distributed", statusVariant: "success" as const, grossPay: "₱88,424.72", netPay: "₱77,165.34" },
  { id: "2", period: "March 2026", payDate: "March 31, 2026", status: "Distributed", statusVariant: "success" as const, grossPay: "₱85,000.00", netPay: "₱73,750.00" },
  { id: "3", period: "February 2026", payDate: "February 28, 2026", status: "Distributed", statusVariant: "success" as const, grossPay: "₱85,000.00", netPay: "₱73,750.00" },
  { id: "4", period: "January 2026", payDate: "January 31, 2026", status: "Distributed", statusVariant: "success" as const, grossPay: "₱75,000.00", netPay: "₱65,200.00" },
];

export default function PortalPayslipsPage() {
  const [year, setYear] = useState("2026");

  return (
    <PortalShell>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Text variant="heading" as="h1" className="text-lg font-bold text-foreground">
              My Payslips
            </Text>
            <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
              {MOCK_EMPLOYEE}
            </Text>
          </div>
          <div className="flex items-center gap-3">
            <select
              className="w-28 rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
            <Button variant="secondary" size="md" className="gap-2">
              <FaIcon icon={faFileArrowDown} size="sm" aria-hidden />
              Download All
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <Text variant="caption" as="h2" className="mb-3 font-semibold uppercase tracking-wide text-muted-foreground">
            {year} Year-to-Date Summary
          </Text>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <Text variant="caption" as="p" className="text-muted-foreground">Total Gross</Text>
              <Text variant="body" as="p" className="text-lg font-bold text-foreground">{YTD_2024.totalGross}</Text>
            </div>
            <div>
              <Text variant="caption" as="p" className="text-muted-foreground">Total Deductions</Text>
              <Text variant="body" as="p" className="text-lg font-bold text-foreground">{YTD_2024.totalDeductions}</Text>
            </div>
            <div>
              <Text variant="caption" as="p" className="text-muted-foreground">Total Net Pay</Text>
              <Text variant="body" as="p" className="text-lg font-bold text-primary">{YTD_2024.totalNetPay}</Text>
            </div>
            <div>
              <Text variant="caption" as="p" className="text-muted-foreground">Tax Withheld (BIR)</Text>
              <Text variant="body" as="p" className="text-lg font-bold text-foreground">{YTD_2024.taxWithheld}</Text>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PAYSLIPS.map((p) => (
            <PortalPayslipListCard
              key={p.id}
              periodLabel={p.period}
              payDate={p.payDate}
              status={p.status}
              statusVariant={p.statusVariant}
              grossPay={p.grossPay}
              netPay={p.netPay}
              viewHref={`/portal/payslips/${p.id}`}
              onDownloadPdf={() => {}}
            />
          ))}
        </div>
      </div>
    </PortalShell>
  );
}
