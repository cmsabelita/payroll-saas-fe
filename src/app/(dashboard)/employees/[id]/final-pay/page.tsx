"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { EmployeeFinalPaySection } from "@/components/organisms";
import { getMockEmployeeById } from "@/data/mocks/mockEmployees";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { DashboardShell } from "../../../_components/DashboardShell";

const MOCK_EARNINGS = [
  { description: "Feb 16–28 Prorated Pay (13 days)", amount: "₱13,090.91", notes: "13/22 working days" },
  { description: "Unused Vacation Leave (8.5 days)", amount: "₱12,363.64", notes: "Per company policy" },
  { description: "13th Month Pay Prorated (Jan 1–Feb 28)", amount: "₱5,333.33", notes: "2/12 of annual salary" },
];

const MOCK_DEDUCTIONS = [
  { description: "SSS (February)", amount: "−₱900.00", notes: "Employee share" },
  { description: "PhilHealth (February)", amount: "−₱425.00", notes: "Employee share" },
  { description: "Pag-IBIG (February)", amount: "−₱100.00", notes: "Employee share" },
  { description: "Withholding Tax (February)", amount: "−₱2,065.00", notes: "BIR TRAIN Law rate" },
  { description: "Outstanding Salary Loan", amount: "−₱5,000.00", notes: "Company loan balance" },
];

const MOCK_CLEARANCE = [
  { label: "IT Equipment returned", status: "cleared" as const },
  { label: "Company ID returned", status: "cleared" as const },
  { label: "Exit interview completed", status: "pending" as const },
  { label: "Final payslip signed", status: "pending" as const },
];

export default function EmployeeFinalPayPage() {
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
          <NextLink href="/employees" className="text-sm font-medium text-primary hover:underline">
            Back to Employees
          </NextLink>
        </div>
      </DashboardShell>
    );
  }

  const displayName = `${employee.firstName} ${employee.lastName}`;

  return (
    <DashboardShell
      topbarTitle="Final Pay"
      topbarSubtitle={displayName}
      topbarTrailing={
        <>
          <IconButton variant="ghost" size="sm" aria-label="Notifications">
            <FaIcon icon={faBell} size="sm" />
          </IconButton>
          <Avatar size="sm" fallback="MS" />
        </>
      }
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <NextLink href="/employees" className="hover:text-foreground">Employees</NextLink>
          <span aria-hidden>›</span>
          <NextLink href={`/employees/${id}`} className="hover:text-foreground">{displayName}</NextLink>
          <span aria-hidden>›</span>
          <span className="font-medium text-foreground">Final Pay</span>
        </nav>

        <EmployeeFinalPaySection
          displayName={displayName}
          employeeId={employee.employeeId}
          lastDay="Feb 28, 2026"
          separationType="Resignation"
          clearanceStatus="Pending"
          earnings={MOCK_EARNINGS}
          earningsSubtotal="₱30,787.88"
          deductions={MOCK_DEDUCTIONS}
          deductionsSubtotal="−₱8,490.00"
          netFinalPay="₱22,297.88"
          clearanceChecklist={MOCK_CLEARANCE}
          step="computed"
          onBackToDraft={() => {}}
          onRelease={() => {}}
          onEdit={() => {}}
        />
      </div>
    </DashboardShell>
  );
}
