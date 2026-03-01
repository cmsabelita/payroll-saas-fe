"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { DashboardKpiStrip } from "@/components/organisms/DashboardKpiStrip";
import { PayrollEmployeesTable } from "@/components/organisms";
import { getMockPayrollDetail, getMockPayrollRunById, MOCK_PAYROLL_EMPLOYEES } from "@/data/mocks/mockPayroll";
import { faBell, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { DashboardShell } from "../../../_components/DashboardShell";

export default function PayrollEmployeesPage() {
  const params = useParams();
  const router = useRouter();
  const id = typeof params.id === "string" ? params.id : "";
  const run = getMockPayrollRunById(id);
  const detail = getMockPayrollDetail(id);

  const kpiItems = useMemo(
    () =>
      detail
        ? [
            { value: `₱${(detail.totalGrossPay / 1_000_000).toFixed(2)}M`, label: "Gross Pay", badge: `${detail.employeeCount} employees` },
            { value: `₱${detail.totalDeductions.toLocaleString()}`, label: "Total Deductions", badge: "SSS · PhilHealth · HDMF · Tax" },
            { value: `₱${detail.totalNetPay.toLocaleString()}`, label: "Net Pay", badge: "After all deductions" },
            { value: `${detail.employeeCount}/${detail.employeeCount}`, label: "Processed", badge: "All employees computed" },
          ]
        : [],
    [detail]
  );

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
          <NextLink href="/payroll" className="flex items-center gap-1.5 hover:text-foreground">
            <FaIcon icon={faChevronLeft} size="sm" />
            Payroll
          </NextLink>
          <span aria-hidden>/</span>
          <div>
            <Text variant="body" as="h1" className="font-semibold text-foreground">
              {run.periodLabel}
            </Text>
            <Text variant="caption" as="p" className="text-muted-foreground">
              Per-employee breakdown · {run.employeeCount} employees
            </Text>
          </div>
        </nav>

        {kpiItems.length > 0 && (
          <DashboardKpiStrip items={kpiItems} className="grid-cols-4" />
        )}

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="border-b border-border px-5 py-3.5">
            <Text variant="body" as="h2" className="font-semibold text-foreground">
              Employee Records
            </Text>
          </div>
          <PayrollEmployeesTable
            rows={MOCK_PAYROLL_EMPLOYEES}
            onViewBreakdown={(employeeId) =>
              router.push(`/payroll/${id}/employees/${employeeId}`)
            }
          />
        </div>
      </div>
    </DashboardShell>
  );
}
