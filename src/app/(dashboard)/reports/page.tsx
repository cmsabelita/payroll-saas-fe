"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { ReportPayrollSection, SettingsLayout } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DashboardShell } from "../_components/DashboardShell";
import { ReportsNav } from "./_lib/reportsNav";

const YEAR_OPTIONS = [{ value: "2026", label: "2026" }, { value: "2025", label: "2025" }, { value: "2024", label: "2024" }];
const MONTH_OPTIONS = [
  { value: "all", label: "All Months" },
  { value: "1", label: "January" }, { value: "2", label: "February" }, { value: "3", label: "March" }, { value: "4", label: "April" },
];
const DEPT_OPTIONS = [
  { value: "all", label: "All Departments" },
  { value: "it", label: "IT" }, { value: "hr", label: "HR" }, { value: "finance", label: "Finance" },
];
const MONTHLY_DATA = [
  { label: "Jan", value: 4.1, formatted: "₱4.1M" },
  { label: "Feb", value: 4.0, formatted: "₱4.0M" },
  { label: "Mar", value: 4.2, formatted: "₱4.2M" },
  { label: "Apr", value: 4.3, formatted: "₱4.3M" },
  { label: "May", value: 0, formatted: "—" },
  { label: "Jun", value: 0, formatted: "—" },
];

export default function ReportsPage() {
  const [year, setYear] = useState("2026");
  const [month, setMonth] = useState("all");
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
        <SettingsLayout nav={<ReportsNav currentHref="/reports/payroll" />}>
          <ReportPayrollSection
            yearOptions={YEAR_OPTIONS}
            monthOptions={MONTH_OPTIONS}
            departmentOptions={DEPT_OPTIONS}
            selectedYear={year}
            selectedMonth={month}
            selectedDepartment={department}
            onYearChange={setYear}
            onMonthChange={setMonth}
            onDepartmentChange={setDepartment}
            onExportExcel={() => {}}
            onExportPdf={() => {}}
            totalPayrollYtd="₱17,150,000"
            avgMonthly="₱4,287,500"
            totalEmployees="87"
            taxWithheldYtd="₱744,000"
            periodLabel="Jan–Apr 2024"
            monthlyData={MONTHLY_DATA}
          />
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
