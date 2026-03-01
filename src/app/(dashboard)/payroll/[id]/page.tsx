"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { AlertBanner } from "@/components/molecules/AlertBanner";
import {
  PayrollDetailActions,
  PayrollDetailHeader,
  PayrollDetailSummary,
} from "@/components/organisms";
import { getMockPayrollDetail } from "@/data/mocks/mockPayroll";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { DashboardShell } from "../../_components/DashboardShell";

export default function PayrollDetailPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const detail = getMockPayrollDetail(id);

  if (detail == null) {
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
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <NextLink href="/payroll" className="hover:text-foreground">Payroll</NextLink>
          <span aria-hidden>›</span>
          <PayrollDetailHeader periodLabel={detail.periodLabel} status={detail.status} />
        </nav>
        <PayrollDetailSummary
          currentStep={detail.currentStep}
          stepCaption={detail.stepCaption}
          totalGrossPay={detail.totalGrossPay}
          totalDeductions={detail.totalDeductions}
          totalNetPay={detail.totalNetPay}
          withholdingTax={detail.withholdingTax}
          employeeCount={detail.employeeCount}
          deductionsBadge={detail.deductionsBadge}
          netPayBadge={detail.netPayBadge}
          withholdingBadge={detail.withholdingBadge}
        />

        {detail.alerts != null && detail.alerts.length > 0 && (
          <div className="space-y-2">
            {detail.alerts.map((alert, i) => (
              <AlertBanner
                key={i}
                variant={alert.variant}
                title={alert.message}
              />
            ))}
          </div>
        )}

        <PayrollDetailActions
          title={detail.actionTitle ?? "Payroll period"}
          description={detail.actionDescription}
          onApprove={() => {}}
          viewEmployeesHref={`/payroll/${id}/employees`}
          adjustmentsHref={`/payroll/${id}/adjust`}
          onRejectToDraft={() => {}}
          showApprove={detail.status === "computed" || detail.status === "draft"}
          showReject={detail.status === "computed" || detail.status === "approved"}
        />

        <div className="grid grid-cols-3 gap-4">
          <NextLink
            href={`/payroll/${id}/employees`}
            className="group block rounded-xl border border-border bg-card p-4 transition hover:border-primary/30 hover:shadow-sm"
          >
            <Text variant="body" as="p" className="font-semibold text-foreground group-hover:text-primary">
              Employee Breakdown
            </Text>
            <Text variant="caption" as="p" className="mt-1 text-muted-foreground">
              {detail.employeeCount} records · earnings, deductions, net pay per employee
            </Text>
          </NextLink>
          <NextLink
            href={`/payroll/${id}/payslips`}
            className="group block rounded-xl border border-border bg-card p-4 transition hover:border-primary/30 hover:shadow-sm"
          >
            <Text variant="body" as="p" className="font-semibold text-foreground group-hover:text-primary">
              Payslips
            </Text>
            <Text variant="caption" as="p" className="mt-1 text-muted-foreground">
              Generate & distribute payslips to employees
            </Text>
          </NextLink>
          <NextLink
            href={`/payroll/${id}/adjust`}
            className="group block rounded-xl border border-border bg-card p-4 transition hover:border-primary/30 hover:shadow-sm"
          >
            <Text variant="body" as="p" className="font-semibold text-foreground group-hover:text-primary">
              Adjustments
            </Text>
            <Text variant="caption" as="p" className="mt-1 text-muted-foreground">
              Manual additions, deductions, and one-offs
            </Text>
          </NextLink>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
            <Text variant="body" as="h2" className="font-semibold text-foreground">
              Employee Records{" "}
              <Text variant="body" as="span" className="font-normal text-muted-foreground">
                ({detail.employeeCount})
              </Text>
            </Text>
            <NextLink
              href={`/payroll/${id}/employees`}
              className="text-sm font-medium text-primary hover:underline"
            >
              View all →
            </NextLink>
          </div>
          <div className="px-5 py-4 text-center">
            <Text variant="caption" as="p" className="text-muted-foreground">
              Showing summary. View full employee breakdown for earnings, deductions, and net pay per employee.
            </Text>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
