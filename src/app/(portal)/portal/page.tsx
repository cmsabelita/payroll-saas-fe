"use client";

import {
  PortalAttendanceStrip,
  PortalGreeting,
  PortalLeaveBalances,
  PortalPayslipCard,
  PortalRequestsList,
} from "@/components/organisms";
import { PortalShell } from "../_components/PortalShell";

const GREETING = {
  dateLabel: "Thursday, February 27, 2026",
  title: "Good morning, Juan 👋",
  subtitle: "Here's what's happening with your account today.",
  quickActions: [
    { label: "Log Attendance", href: "/portal/attendance", variant: "primary" as const },
    { label: "Apply Leave", href: "/portal/requests/leave/new", variant: "secondary" as const },
    { label: "File OT", href: "/portal/requests/ot/new", variant: "secondary" as const },
  ],
};

const PAYSLIP_CARD = {
  periodLabel: "Feb 1–15, 2026 · Semi-monthly",
  statusLabel: "Released",
  statusVariant: "success" as const,
  grossPay: "₱ 35,200",
  deductions: "₱ 4,685",
  netPay: "₱ 30,515",
  breakdown: [
    { label: "Basic Pay (16 days)", amount: "₱ 32,000.00" },
    { label: "Overtime Pay (5.5 hrs)", amount: "₱ 3,200.00" },
    { label: "SSS Contribution", amount: "₱ 900.00", isDeduction: true },
    { label: "PhilHealth", amount: "₱ 425.00", isDeduction: true },
    { label: "Pag-IBIG (HDMF)", amount: "₱ 100.00", isDeduction: true },
    { label: "Withholding Tax", amount: "₱ 3,260.00", isDeduction: true },
  ],
  viewAllHref: "/portal/payslips",
};

const LEAVE_BALANCES = [
  { name: "Vacation Leave", used: 8.5, total: 15, variant: "primary" as const },
  { name: "Sick Leave", used: 12, total: 15, variant: "info" as const },
  { name: "Emergency Leave", used: 3, total: 3, variant: "secondary" as const },
  { name: "Birthday Leave", used: 0, total: 1 },
];

const ATTENDANCE_DAYS = [
  { dayLabel: "Mon", timeIn: "8:01", status: "on-time" as const },
  { dayLabel: "Tue", timeIn: "8:04", status: "on-time" as const },
  { dayLabel: "Wed", timeIn: "8:23", status: "late" as const },
  { dayLabel: "Thu", timeIn: "7:58", status: "on-time" as const },
  { dayLabel: "Fri", timeIn: undefined, status: "pending" as const },
];

const PENDING_REQUESTS = [
  {
    title: "Vacation Leave",
    status: "Pending",
    statusVariant: "warning" as const,
    detail: "Feb 28 – Mar 1, 2026 · 2 days. Filed: Feb 25, 2026",
    href: "/portal/requests/1",
  },
  {
    title: "Overtime Request",
    status: "Approved",
    statusVariant: "success" as const,
    detail: "Feb 26, 2026 · 3 hrs (6 PM – 9 PM). Approved by: Alonzo Cruz",
    href: "/portal/requests/2",
  },
  {
    title: "Sick Leave",
    status: "Approved",
    statusVariant: "secondary" as const,
    detail: "Feb 12, 2026 · 1 day. Approved by: Maria Santos",
    href: "/portal/requests/3",
  },
];

export default function PortalPage() {
  return (
    <PortalShell>
      <div className="flex flex-col gap-6">
        <PortalGreeting {...GREETING} />
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PortalPayslipCard {...PAYSLIP_CARD} />
          </div>
          <div>
            <PortalLeaveBalances items={LEAVE_BALANCES} applyLeaveHref="/portal/requests/leave/new" />
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <PortalAttendanceStrip
            weekLabel="Feb 24–28, 2026"
            days={ATTENDANCE_DAYS}
            todayLabel="Today — February 27 (Thursday)"
            todayDetail="Time-in: 7:58 AM · Working"
            viewAllHref="/portal/attendance"
          />
          <PortalRequestsList
            title="My Requests"
            actions={[
              { label: "Apply Leave", href: "/portal/requests/leave/new", variant: "primary" },
              { label: "File OT", href: "/portal/requests/ot/new", variant: "secondary" },
            ]}
            items={PENDING_REQUESTS}
            viewAllHref="/portal/requests"
          />
        </div>
      </div>
    </PortalShell>
  );
}
