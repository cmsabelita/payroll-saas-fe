"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { ReportLeaveSection, SettingsLayout } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DashboardShell } from "../../_components/DashboardShell";
import { ReportsNav } from "../_lib/reportsNav";

const PERIOD_OPTIONS = [
  { value: "2026-04", label: "April 2026" },
  { value: "2026-03", label: "March 2026" },
];
const DEPT_OPTIONS = [
  { value: "all", label: "All Departments" },
  { value: "it", label: "IT" },
  { value: "hr", label: "HR" },
];
const LEAVE_ROWS = [
  { employee: "Maria Santos", department: "HR", leaveType: "Vacation", startDate: "Apr 1, 2026", endDate: "Apr 5, 2026", days: 5, status: "Approved" },
  { employee: "Juan Dela Cruz", department: "IT", leaveType: "Sick", startDate: "Apr 10, 2026", endDate: "Apr 11, 2026", days: 2, status: "Pending" },
];

export default function ReportsLeavePage() {
  const [period, setPeriod] = useState("2026-04");
  const [department, setDepartment] = useState("all");

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
        <SettingsLayout nav={<ReportsNav currentHref="/reports/leave" />}>
          <ReportLeaveSection
            periodOptions={PERIOD_OPTIONS}
            departmentOptions={DEPT_OPTIONS}
            selectedPeriod={period}
            selectedDepartment={department}
            onPeriodChange={setPeriod}
            onDepartmentChange={setDepartment}
            onExportExcel={() => {}}
            totalRequests="24"
            approved="18"
            pending="4"
            denied="2"
            rows={LEAVE_ROWS}
          />
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
