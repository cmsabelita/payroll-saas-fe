"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { DashboardKpiStrip } from "@/components/organisms/DashboardKpiStrip";
import { PayrollTable, PayrollToolbar } from "@/components/organisms";
import {
  MOCK_PAYROLL_RUNS,
  MOCK_PAYROLL_SUMMARY,
} from "@/data/mocks/mockPayroll";
import { faBell, faPlus } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { DashboardShell } from "../_components/DashboardShell";

const PAYROLL_TABS = [
  { key: "all", label: "All", count: 4 },
  { key: "draft", label: "Draft", count: 1 },
  { key: "processing", label: "Processing", count: 0 },
  { key: "computed", label: "Computed", count: 0 },
  { key: "approved", label: "Approved", count: 1 },
  { key: "paid", label: "Paid", count: 2 },
];

export default function PayrollPage() {
  const router = useRouter();
  const [statusTab, setStatusTab] = useState("all");

  const filteredRuns = useMemo(() => {
    if (statusTab === "all") return MOCK_PAYROLL_RUNS;
    return MOCK_PAYROLL_RUNS.filter((r) => r.status === statusTab);
  }, [statusTab]);

  const kpiItems = useMemo(
    () =>
      MOCK_PAYROLL_SUMMARY.map((s) => ({
        value: s.value,
        label: s.label,
        badge: s.badge,
      })),
    []
  );

  return (
    <DashboardShell
      topbarTitle="Payroll Periods"
      topbarPrimaryAction={
        <NextLink
          href="/payroll/new"
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:brightness-110"
        >
          <FaIcon icon={faPlus} size="sm" aria-hidden />
          New Period
        </NextLink>
      }
      topbarTrailing={
        <>
          <IconButton variant="ghost" size="sm" aria-label="Notifications">
            <FaIcon icon={faBell} size="sm" />
          </IconButton>
          <Avatar size="sm" fallback="MS" />
        </>
      }
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <DashboardKpiStrip items={kpiItems} className="grid-cols-4" />

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <PayrollToolbar
            statusTab={statusTab}
            onStatusTabChange={setStatusTab}
            tabs={PAYROLL_TABS}
            yearLabel="2026"
            onYearFilterClick={() => {}}
            onNewPeriodClick={() => router.push("/payroll/new")}
          />
          <PayrollTable
            runs={filteredRuns}
            onRunClick={(id) => router.push(`/payroll/${id}`)}
            onComputeClick={() => {}}
            onMarkPaidClick={() => {}}
            onViewClick={(id) => router.push(`/payroll/${id}`)}
          />
        </div>
      </div>
    </DashboardShell>
  );
}
