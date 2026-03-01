"use client";

import {
  Avatar,
  Badge,
  FaIcon,
  IconButton,
  Surface,
  Text,
} from "@/components/atoms";
import {
  PayrollStatusRow,
  PendingApprovalRow,
} from "@/components/molecules";
import {
  AlertsDeadlines,
  DashboardKpiStrip,
  PayrollTrendChart,
} from "@/components/organisms";
import { DateRangeTrigger } from "@/components/molecules/DateRangeTrigger";
import { DashboardShell } from "../_components/DashboardShell";
import {
  faBell,
  faClipboardList,
  faClock,
  faMoneyBillTrendUp,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";

const KPI_ITEMS = [
  {
    value: "128",
    label: "Total Employees",
    icon: <FaIcon icon={faUsers} size="sm" className="text-info" />,
    badge: <span className="flex items-center gap-0.5 text-xs font-semibold text-success">↑ 3 new</span>,
  },
  {
    value: "₱4.28M",
    label: "Gross Payroll (Last Period)",
    icon: <FaIcon icon={faMoneyBillTrendUp} size="sm" className="text-primary" />,
    badge: <span className="flex items-center gap-0.5 text-xs font-semibold text-destructive">↓ 2.1%</span>,
  },
  {
    value: "12",
    label: "Pending Approvals · Leave: 7, OT: 5",
    icon: <FaIcon icon={faClock} size="sm" className="text-warning" />,
    badge: <Badge variant="warning">Needs action</Badge>,
  },
  {
    value: "2",
    label: "Active Payroll Periods",
    icon: <FaIcon icon={faClipboardList} size="sm" className="text-info" />,
    badge: <Badge variant="secondary">Feb 2026</Badge>,
  },
];

const CHART_MONTHS = [
  { label: "Sep", grossPct: 72, netPct: 58 },
  { label: "Oct", grossPct: 85, netPct: 70 },
  { label: "Nov", grossPct: 78, netPct: 64 },
  { label: "Dec", grossPct: 92, netPct: 76 },
  { label: "Jan", grossPct: 88, netPct: 72 },
  { label: "Feb", grossPct: 95, netPct: 80, current: true, currentLabel: "₱4.28M" },
];

const PAYROLL_ROWS = [
  { title: "Feb 2026 (2nd Half)", subtitle: "Feb 16–28 · 128 emp.", status: "Draft", showDivider: true },
  { title: "Feb 2026 (1st Half)", subtitle: "Feb 1–15 · 128 emp.", status: "Approved", showDivider: true },
  { title: "Jan 2026 (2nd Half)", subtitle: "Jan 16–31 · 126 emp.", status: "Paid", showDivider: true },
  { title: "Jan 2026 (1st Half)", subtitle: "Jan 1–15 · 126 emp.", status: "Paid", showDivider: false },
];

const PENDING_APPROVALS = [
  { primaryText: "Juan dela Cruz", secondaryText: "Leave · Feb 28–Mar 1", badge: <Badge variant="secondary">Leave</Badge> },
  { primaryText: "Maria Santos", secondaryText: "OT · Feb 27", badge: <Badge variant="secondary">OT</Badge> },
  { primaryText: "Rosa Perez", secondaryText: "Leave · Mar 5–6", badge: <Badge variant="secondary">Leave</Badge> },
];

const ALERT_ITEMS = [
  { variant: "warning" as const, title: "SSS e-Alumni filing due Mar 15", description: "Submit for Feb 2026 payroll." },
  { variant: "info" as const, title: "BIR 1601C due Mar 10", description: "Monthly remittance." },
  { variant: "success" as const, title: "PhilHealth updated", description: "New rates applied for Feb." },
];

export default function DashboardPage() {
  return (
    <DashboardShell
      topbarTitle="Dashboard"
      topbarSubtitle="Overview and quick actions"
      topbarDateRange={<DateRangeTrigger label="Last 30 days" onClick={() => {}} />}
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
        <div>
          <Text variant="caption" as="p" className="mb-0.5 text-muted-foreground">
            Thursday, February 27, 2026
          </Text>
          <Text variant="heading" as="h2" className="text-xl font-bold">
            Good morning, Mark 👋
          </Text>
        </div>

        <DashboardKpiStrip items={KPI_ITEMS} />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="lg:col-span-2 h-full min-h-0">
            <PayrollTrendChart months={CHART_MONTHS} className="h-full" />
          </div>
          <Surface elevation="none" className="rounded-xl border border-border p-5 h-full">
            <Text variant="label" as="h3" className="mb-4 font-semibold">
              Payroll Status
            </Text>
            <div className="space-y-3">
              {PAYROLL_ROWS.map((row, i) => (
                <PayrollStatusRow
                  key={i}
                  title={row.title}
                  subtitle={row.subtitle}
                  status={row.status}
                  showDivider={row.showDivider}
                />
              ))}
            </div>
            <NextLink
              href="/payroll"
              className="inline-flex h-8 w-full items-center justify-center rounded-md border border-border px-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              View all periods
            </NextLink>
          </Surface>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Surface elevation="none" className="rounded-xl border border-border p-5">
            <div className="mb-4 flex items-center justify-between">
              <Text variant="label" as="h3" className="font-semibold">
                Pending Approvals
              </Text>
              <Badge variant="warning">12 pending</Badge>
            </div>
            <div className="space-y-1">
              {PENDING_APPROVALS.map((row, i) => (
                <PendingApprovalRow
                  key={i}
                  avatar={<Avatar size="sm" fallback={row.primaryText.slice(0, 2).toUpperCase()} />}
                  primaryText={row.primaryText}
                  secondaryText={row.secondaryText}
                  badge={row.badge}
                  onClick={() => {}}
                />
              ))}
            </div>
            <NextLink
              href="/approvals"
              className="inline-flex h-8 w-full items-center justify-center rounded-md border border-border px-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              View all approvals
            </NextLink>
          </Surface>
          <AlertsDeadlines items={ALERT_ITEMS} />
        </div>
      </div>
    </DashboardShell>
  );
}
