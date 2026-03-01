"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { AttendanceTable, AttendanceToolbar } from "@/components/organisms";
import type { AttendanceTableRow } from "@/components/organisms/AttendanceTable";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DashboardShell } from "../_components/DashboardShell";

const DEPT_OPTIONS = [
  { value: "all", label: "All Departments" },
  { value: "it", label: "IT" },
  { value: "hr", label: "HR" },
];
const MOCK_ROWS: AttendanceTableRow[] = [
  { id: "1", employeeName: "Maria Santos", department: "HR", date: "2026-02-28", timeIn: "08:15", timeOut: "17:30", hours: "8.5", status: "present" },
  { id: "2", employeeName: "Juan Dela Cruz", department: "IT", date: "2026-02-28", timeIn: "09:00", timeOut: "18:00", hours: "8.0", status: "late" },
  { id: "3", employeeName: "Rosa Perez", department: "Finance", date: "2026-02-27", timeIn: "08:00", timeOut: "17:00", hours: "8.0", status: "present" },
];

export default function AttendancePage() {
  const router = useRouter();
  const [dateFrom, setDateFrom] = useState("2026-02-01");
  const [dateTo, setDateTo] = useState("2026-02-28");
  const [department, setDepartment] = useState("all");

  return (
    <DashboardShell
      topbarTitle="Attendance"
      topbarSubtitle="Time and attendance — mock data"
      topbarTrailing={
        <>
          <IconButton variant="ghost" size="sm" aria-label="Notifications">
            <FaIcon icon={faBell} size="sm" />
          </IconButton>
          <Avatar size="sm" fallback="MS" />
        </>
      }
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4">
        <AttendanceToolbar
          dateFrom={dateFrom}
          dateTo={dateTo}
          onDateFromChange={setDateFrom}
          onDateToChange={setDateTo}
          departmentFilter={department}
          onDepartmentFilterChange={setDepartment}
          departmentOptions={DEPT_OPTIONS}
        />
        <AttendanceTable rows={MOCK_ROWS} onView={(id) => router.push(`/attendance/${id}`)} />
      </div>
    </DashboardShell>
  );
}
