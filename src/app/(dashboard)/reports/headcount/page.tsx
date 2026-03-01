"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { ReportHeadcountSection, SettingsLayout } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DashboardShell } from "../../_components/DashboardShell";
import { ReportsNav } from "../_lib/reportsNav";

const PERIOD_OPTIONS = [
  { value: "2026-04", label: "April 2026" },
  { value: "2026-03", label: "March 2026" },
];
const HEADCOUNT_ROWS = [
  { department: "IT", headcount: 15, newHires: 2, separations: 0, turnoverRate: "0%" },
  { department: "HR", headcount: 8, newHires: 0, separations: 1, turnoverRate: "4.2%" },
  { department: "Finance", headcount: 12, newHires: 1, separations: 0, turnoverRate: "0%" },
  { department: "Operations", headcount: 22, newHires: 3, separations: 2, turnoverRate: "2.1%" },
];

export default function ReportsHeadcountPage() {
  const [period, setPeriod] = useState("2026-04");

  return (
    <DashboardShell
      topbarTitle="Reports"
      topbarSubtitle="Export and view reports"
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
        <SettingsLayout nav={<ReportsNav currentHref="/reports/headcount" />}>
          <ReportHeadcountSection
            periodOptions={PERIOD_OPTIONS}
            selectedPeriod={period}
            onPeriodChange={setPeriod}
            onExportExcel={() => {}}
            totalHeadcount="87"
            newHires="6"
            separations="3"
            turnoverRate="1.8%"
            rows={HEADCOUNT_ROWS}
          />
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
