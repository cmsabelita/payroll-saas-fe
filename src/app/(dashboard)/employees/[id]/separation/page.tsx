"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { EmployeeSeparationForm } from "@/components/organisms";
import { getMockEmployeeById } from "@/data/mocks/mockEmployees";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useParams, useRouter } from "next/navigation";
import { DashboardShell } from "../../../_components/DashboardShell";

export default function EmployeeSeparationPage() {
  const params = useParams();
  const router = useRouter();
  const id = typeof params.id === "string" ? params.id : "";
  const employee = getMockEmployeeById(id);

  if (employee == null) {
    return (
      <DashboardShell topbarTitle="Employees" topbarTrailing={<Avatar size="sm" fallback="MS" />}>
        <div className="flex flex-col items-center justify-center gap-4 py-12">
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
      topbarTitle="Process Separation"
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
      <div className="mx-auto max-w-2xl flex flex-col gap-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <NextLink href="/employees" className="hover:text-foreground">Employees</NextLink>
          <span aria-hidden>›</span>
          <NextLink href={`/employees/${id}`} className="hover:text-foreground">{displayName}</NextLink>
          <span aria-hidden>›</span>
          <span className="font-medium text-foreground">Process Separation</span>
        </nav>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <EmployeeSeparationForm
            displayName={displayName}
            employeeId={employee.employeeId}
            defaultValues={{
              separationType: "resignation",
              lastDay: "2026-02-28",
              dateNoticeReceived: "2026-02-14",
              clearanceStatus: "pending",
            }}
            onSubmit={() => router.push(`/employees/${id}/final-pay`)}
            onCancel={() => router.push(`/employees/${id}`)}
          />
        </div>
      </div>
    </DashboardShell>
  );
}
