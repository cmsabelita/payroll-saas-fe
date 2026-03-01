"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { EmployeeSalaryView } from "@/components/organisms";
import { getMockEmployeeById } from "@/data/mocks/mockEmployees";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { DashboardShell } from "../../../_components/DashboardShell";

const MOCK_SALARY_SUMMARY = {
  monthlyBasic: "₱32,000.00",
  dailyRate: "₱1,454.55",
  hourlyRate: "₱181.82",
  effectiveSince: "July 1, 2023",
};

const MOCK_SALARY_HISTORY = [
  {
    effectiveDate: "Jul 1, 2023",
    monthlyBasic: "₱32,000.00",
    change: "+₱4,000",
    changePercent: "+14.3%",
    reason: "Annual performance review",
    updatedBy: "Mark Santos",
  },
  {
    effectiveDate: "Jan 15, 2023",
    monthlyBasic: "₱28,000.00",
    updatedBy: "Mark Santos",
  },
];

const MOCK_ALLOWANCES = [
  {
    type: "Rice Allowance",
    amount: "₱2,000.00",
    frequency: "Monthly",
    taxable: "No (De Minimis)",
    since: "Jan 2023",
  },
  {
    type: "Transport Allowance",
    amount: "₱2,500.00",
    frequency: "Monthly",
    taxable: "Yes",
    since: "Jan 2023",
  },
];

export default function EmployeeSalaryPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const employee = getMockEmployeeById(id);

  if (employee == null) {
    return (
      <DashboardShell topbarTitle="Employees" topbarTrailing={<Avatar size="sm" fallback="MS" />}>
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4">
          <Text variant="body" as="p" className="text-muted-foreground">
            Employee not found.
          </Text>
          <NextLink
            href="/employees"
            className="text-sm font-medium text-primary hover:underline"
          >
            Back to Employees
          </NextLink>
        </div>
      </DashboardShell>
    );
  }

  const displayName = `${employee.firstName} ${employee.lastName}`;

  return (
    <DashboardShell
      topbarTitle="Salary"
      topbarSubtitle={displayName}
      topbarTrailing={
        <>
          <NextLink
            href={`/employees/${id}/edit`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:bg-muted"
          >
            Edit Profile
          </NextLink>
          <IconButton variant="ghost" size="sm" aria-label="Notifications">
            <FaIcon icon={faBell} size="sm" />
          </IconButton>
          <Avatar size="sm" fallback="MS" />
        </>
      }
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <NextLink href="/employees" className="hover:text-foreground">
            Employees
          </NextLink>
          <span aria-hidden>›</span>
          <NextLink href={`/employees/${id}`} className="hover:text-foreground">
            {displayName}
          </NextLink>
          <span aria-hidden>›</span>
          <span className="font-medium text-foreground">Salary</span>
        </nav>

        <EmployeeSalaryView
          summary={MOCK_SALARY_SUMMARY}
          history={MOCK_SALARY_HISTORY}
          allowances={MOCK_ALLOWANCES}
          onRecordSalaryChange={() => {}}
          onAddAllowance={() => {}}
          onEditAllowance={() => {}}
        />
      </div>
    </DashboardShell>
  );
}
