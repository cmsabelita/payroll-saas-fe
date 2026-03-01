"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { PayrollEmployeeBreakdown } from "@/components/organisms";
import { getMockPayrollBreakdown, getMockPayrollRunById } from "@/data/mocks/mockPayroll";
import { faBell, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { DashboardShell } from "../../../../_components/DashboardShell";

export default function PayrollEmployeeBreakdownPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const employeeId = typeof params.employeeId === "string" ? params.employeeId : "";
  const run = getMockPayrollRunById(id);
  const breakdown = getMockPayrollBreakdown(id, employeeId);

  if (run == null || breakdown == null) {
    return (
      <DashboardShell topbarTitle="Payroll">
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          <Text variant="body" as="p" className="text-muted-foreground">
            Payroll or employee not found.
          </Text>
          <NextLink href="/payroll" className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
            Back to Payroll
          </NextLink>
        </div>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell
      topbarTitle="Payroll"
      topbarTrailing={
        <>
          <IconButton variant="ghost" size="sm" aria-label="Notifications">
            <FaIcon icon={faBell} size="sm" />
          </IconButton>
          <Avatar size="sm" fallback="MS" />
        </>
      }
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <NextLink href={`/payroll/${id}/employees`} className="flex items-center gap-1.5 hover:text-foreground">
            <FaIcon icon={faChevronLeft} size="sm" />
            {run.periodLabel} / Employees
          </NextLink>
          <span aria-hidden>/</span>
          <div>
            <Text variant="body" as="h1" className="font-semibold text-foreground">
              {breakdown.name} — Payslip Preview
            </Text>
            <Text variant="caption" as="p" className="text-muted-foreground">
              {breakdown.position} · Employee #{breakdown.employeeId}
            </Text>
          </div>
        </nav>

        <PayrollEmployeeBreakdown
          employeeId={breakdown.employeeId}
          name={breakdown.name}
          position={breakdown.position}
          department={breakdown.department}
          payPeriod={breakdown.payPeriod}
          payDate={breakdown.payDate}
          grossPay={breakdown.grossPay}
          totalDeductions={breakdown.totalDeductions}
          netPay={breakdown.netPay}
          earnings={breakdown.earnings}
          deductions={breakdown.deductions}
          onDownloadPdf={() => {}}
        />
      </div>
    </DashboardShell>
  );
}
