"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { ReportAttendanceSection, SettingsLayout } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DashboardShell } from "../../_components/DashboardShell";
import { ReportsNav } from "../_lib/reportsNav";

const PERIOD_OPTIONS = [
  { value: "2026-04", label: "April 2026" },
  { value: "2026-03", label: "March 2026" },
  { value: "2025-04", label: "April 2025" },
];
const DEPT_OPTIONS = [
  { value: "all", label: "All Departments" },
  { value: "it", label: "IT" },
  { value: "hr", label: "HR" },
];
const DEPT_ROWS = [
  { department: "Customer Support", employees: 9, avgDaysPresent: "21.4", lateCount: 2, absentDays: 0, otHours: 0, rate: "100.0%" },
  { department: "Human Resources", employees: 8, avgDaysPresent: "21.8", lateCount: 3, absentDays: 1, otHours: 12, rate: "99.1%" },
  { department: "Information Technology", employees: 15, avgDaysPresent: "22.1", lateCount: 8, absentDays: 2, otHours: 48, rate: "98.6%" },
  { department: "Finance & Accounting", employees: 12, avgDaysPresent: "21.5", lateCount: 6, absentDays: 3, otHours: 24, rate: "97.3%" },
];
const LATE_ROWS = [
  { employee: "Juan Dela Cruz", department: "IT", lateCount: 5, period: "Apr 2026" },
  { employee: "Maria Santos", department: "HR", lateCount: 3, period: "Apr 2026" },
];

export default function ReportsAttendancePage() {
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
        <SettingsLayout nav={<ReportsNav currentHref="/reports/attendance" />}>
          <ReportAttendanceSection
            periodOptions={PERIOD_OPTIONS}
            departmentOptions={DEPT_OPTIONS}
            selectedPeriod={period}
            selectedDepartment={department}
            onPeriodChange={setPeriod}
            onDepartmentChange={setDepartment}
            onExportExcel={() => {}}
            avgDaysPresent="21.8"
            lateArrivals="47"
            absentDays="12"
            overtimeHours="156h"
            periodLabel="of 22 working days"
            departmentRows={DEPT_ROWS}
            lateRows={LATE_ROWS}
          />
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
