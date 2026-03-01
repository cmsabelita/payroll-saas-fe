"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { AlertBanner } from "@/components/molecules/AlertBanner";
import { PayrollPayslipsList } from "@/components/organisms";
import { getMockPayrollRunById, MOCK_PAYROLL_PAYSLIPS } from "@/data/mocks/mockPayroll";
import { faBell, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { DashboardShell } from "../../../_components/DashboardShell";

export default function PayrollPayslipsPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const run = getMockPayrollRunById(id);

  if (run == null) {
    return (
      <DashboardShell topbarTitle="Payroll">
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          <Text variant="body" as="p" className="text-muted-foreground">
            Payroll period not found.
          </Text>
          <NextLink href="/payroll" className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
            Back to Payroll
          </NextLink>
        </div>
      </DashboardShell>
    );
  }

  const sentCount = MOCK_PAYROLL_PAYSLIPS.filter((p) => p.sent).length;

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
          <NextLink href={`/payroll/${id}`} className="flex items-center gap-1.5 hover:text-foreground">
            <FaIcon icon={faChevronLeft} size="sm" />
            {run.periodLabel}
          </NextLink>
          <span aria-hidden>/</span>
          <div>
            <Text variant="body" as="h1" className="font-semibold text-foreground">
              Distribute Payslips
            </Text>
            <Text variant="caption" as="p" className="text-muted-foreground">
              Send payslips to all {run.employeeCount} employees
            </Text>
          </div>
        </nav>

        <AlertBanner
          variant="success"
          title="Payroll Approved. You can now distribute payslips to employees."
        />

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <PayrollPayslipsList
            items={MOCK_PAYROLL_PAYSLIPS}
            totalCount={run.employeeCount}
            sentCount={sentCount}
            onDownload={() => {}}
          />
        </div>
      </div>
    </DashboardShell>
  );
}
