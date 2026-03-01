"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { AlertBanner } from "@/components/molecules/AlertBanner";
import { PayrollAdjustList } from "@/components/organisms";
import { getMockPayrollRunById, MOCK_PAYROLL_ADJUSTMENTS } from "@/data/mocks/mockPayroll";
import { faBell, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { DashboardShell } from "../../../_components/DashboardShell";

export default function PayrollAdjustPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const run = getMockPayrollRunById(id);

  const netEffect = useMemo(
    () => MOCK_PAYROLL_ADJUSTMENTS.reduce((sum, a) => sum + a.amount, 0),
    []
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
          <NextLink href={`/payroll/${id}`} className="flex items-center gap-1.5 hover:text-foreground">
            <FaIcon icon={faChevronLeft} size="sm" />
            {run.periodLabel}
          </NextLink>
          <span aria-hidden>/</span>
          <div>
            <Text variant="body" as="h1" className="font-semibold text-foreground">
              Manual Adjustments
            </Text>
            <Text variant="caption" as="p" className="text-muted-foreground">
              Add one-time earnings or deductions for this period
            </Text>
          </div>
        </nav>

        <AlertBanner
          variant="warning"
          title="Adjustments apply to this period only and will be reflected in the final payroll computation. Recompute after adding adjustments."
        />

        <PayrollAdjustList
          items={MOCK_PAYROLL_ADJUSTMENTS}
          netEffect={netEffect}
          onAddAdjustment={() => {}}
          onEdit={() => {}}
          onRemove={() => {}}
        />
      </div>
    </DashboardShell>
  );
}
