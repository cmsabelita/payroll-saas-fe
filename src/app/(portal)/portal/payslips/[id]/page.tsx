"use client";

import { Button, FaIcon, Text } from "@/components/atoms";
import { PortalShell } from "../../../_components/PortalShell";
import Link from "next/link";
import { use } from "react";
import { faChevronLeft, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const MOCK = {
  period: "April 2026",
  periodRange: "April 1–30, 2026",
  payDate: "April 30, 2026",
  company: { name: "Acme Corporation", address: "123 Ayala Avenue, Makati City, Metro Manila", tin: "123-456-789-000" },
  employee: {
    name: "Juan dela Cruz",
    empNo: "EMP-0042",
    position: "Software Engineer",
    department: "Engineering",
    tin: "234-567-890-000",
    sss: "04-1234567-8",
    philHealth: "12-345678901-2",
    pagIbig: "1234-5678-9012",
  },
  earnings: [
    { label: "Basic Salary", amount: "₱75,000.00" },
    { label: "Rice Allowance", amount: "₱2,000.00" },
    { label: "Transportation", amount: "₱3,000.00" },
    { label: "Communication", amount: "₱1,500.00" },
    { label: "Overtime (8 hrs)", amount: "₱3,515.63" },
    { label: "Holiday Pay (1 day)", amount: "₱3,409.09" },
  ],
  totalGross: "₱88,424.72",
  deductions: [
    { label: "SSS Contribution", amount: "₱1,125.00" },
    { label: "PhilHealth", amount: "₱1,875.00" },
    { label: "Pag-IBIG (HDMF)", amount: "₱100.00" },
    { label: "Withholding Tax", amount: "₱7,925.00" },
    { label: "Late Deduction", amount: "₱234.38" },
  ],
  totalDeductions: "₱11,259.38",
  netPay: "₱77,165.34",
};

export default function PortalPayslipDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <PortalShell>
      <div key={id} className="flex flex-col gap-6">
        <nav className="flex items-center gap-2" aria-label="Breadcrumb">
          <Link
            href="/portal/payslips"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <FaIcon icon={faChevronLeft} size="xs" aria-hidden />
            Payslips
          </Link>
          <span className="text-muted-foreground/60" aria-hidden>/</span>
          <span className="text-sm font-medium text-foreground">{MOCK.period}</span>
        </nav>

        <div className="overflow-hidden rounded-xl border border-border bg-card">
          {/* Company header */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border bg-muted/30 px-6 py-5">
            <div>
              <Text variant="body" as="p" className="font-bold text-foreground">
                {MOCK.company.name}
              </Text>
              <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
                {MOCK.company.address}
              </Text>
              <Text variant="caption" as="p" className="text-muted-foreground">
                TIN: {MOCK.company.tin}
              </Text>
            </div>
            <div className="text-right">
              <Text variant="caption" as="p" className="font-bold uppercase tracking-widest text-foreground">
                Payslip
              </Text>
              <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
                {MOCK.periodRange}
              </Text>
              <Text variant="caption" as="p" className="text-muted-foreground">
                Pay Date: {MOCK.payDate}
              </Text>
            </div>
          </div>

          {/* Employee info */}
          <div className="grid grid-cols-1 border-b border-border px-6 py-4 sm:grid-cols-2 sm:gap-4">
            <div className="flex flex-col gap-1">
              <InfoRow label="Employee Name" value={MOCK.employee.name} />
              <InfoRow label="Employee #" value={MOCK.employee.empNo} />
              <InfoRow label="Position" value={MOCK.employee.position} />
              <InfoRow label="Department" value={MOCK.employee.department} />
            </div>
            <div className="flex flex-col gap-1">
              <InfoRow label="TIN" value={MOCK.employee.tin} />
              <InfoRow label="SSS #" value={MOCK.employee.sss} />
              <InfoRow label="PhilHealth #" value={MOCK.employee.philHealth} />
              <InfoRow label="Pag-IBIG #" value={MOCK.employee.pagIbig} />
            </div>
          </div>

          {/* Earnings & Deductions */}
          <div className="grid grid-cols-1 gap-6 border-b border-border px-6 py-4 sm:grid-cols-2">
            <div>
              <Text variant="caption" as="p" className="mb-2 font-semibold uppercase tracking-wide text-muted-foreground">
                Earnings
              </Text>
              <table className="w-full">
                <tbody className="divide-y divide-border">
                  {MOCK.earnings.map((row) => (
                    <tr key={row.label}>
                      <td className="py-1.5 text-sm text-muted-foreground">{row.label}</td>
                      <td className="py-1.5 text-right text-sm font-medium text-foreground">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="border-t-2 border-border">
                  <tr>
                    <td className="pt-2 text-sm font-semibold text-foreground">Total Gross</td>
                    <td className="pt-2 text-right text-sm font-bold text-foreground">{MOCK.totalGross}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div>
              <Text variant="caption" as="p" className="mb-2 font-semibold uppercase tracking-wide text-muted-foreground">
                Deductions
              </Text>
              <table className="w-full">
                <tbody className="divide-y divide-border">
                  {MOCK.deductions.map((row) => (
                    <tr key={row.label}>
                      <td className="py-1.5 text-sm text-muted-foreground">{row.label}</td>
                      <td className="py-1.5 text-right text-sm font-medium text-foreground">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="border-t-2 border-border">
                  <tr>
                    <td className="pt-2 text-sm font-semibold text-foreground">Total Deductions</td>
                    <td className="pt-2 text-right text-sm font-bold text-foreground">{MOCK.totalDeductions}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Net Pay */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-primary/10 px-6 py-5">
            <div>
              <Text variant="caption" as="p" className="font-semibold uppercase tracking-wide text-primary">
                Net Pay
              </Text>
              <Text variant="caption" as="p" className="mt-0.5 text-primary/80">
                {MOCK.period}
              </Text>
            </div>
            <Text variant="body" as="p" className="text-3xl font-black text-primary">
              {MOCK.netPay}
            </Text>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="md" className="flex-1 gap-2 sm:flex-initial">
            <FaIcon icon={faFilePdf} size="sm" aria-hidden />
            Download PDF
          </Button>
          <Link
            href="/portal/payslips"
            className="inline-flex h-10 flex-1 items-center justify-center rounded-md border border-border bg-secondary px-5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80 sm:flex-initial"
          >
            Back to Payslips
          </Link>
        </div>
      </div>
    </PortalShell>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="w-28 shrink-0 text-xs text-muted-foreground">{label}</span>
      <span className="text-xs font-medium text-foreground">{value}</span>
    </div>
  );
}
