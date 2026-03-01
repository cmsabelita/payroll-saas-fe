"use client";

import { useState } from "react";
import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { Card } from "@/components/molecules/Card";
import {
  EmployeeEditAccessSection,
  EmployeeEditEmploymentSection,
  EmployeeEditGovIdsSection,
  EmployeeEditHeader,
  EmployeeEditTabs,
  EmployeeEditSalarySection,
  EmployeeEditTaxSection,
} from "@/components/organisms";
import {
  getMockEmployeeAccess,
  getMockEmployeeById,
  getMockEmployeeEmployment,
  getMockEmployeeGovIds,
  getMockEmployeeSalary,
  getMockEmployeeTax,
} from "@/data/mocks/mockEmployees";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { DashboardShell } from "../../../_components/DashboardShell";

const EMPLOYEE_EDIT_TABS = [
  { key: "profile", label: "Personal Info" },
  { key: "employment", label: "Employment" },
  { key: "govids", label: "Gov't IDs" },
  { key: "salary", label: "Salary" },
  { key: "tax", label: "Tax Info" },
  { key: "access", label: "App Access" },
];

export default function EmployeeEditPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const [activeTab, setActiveTab] = useState("profile");

  const employee = getMockEmployeeById(id);

  if (employee == null) {
    return (
      <DashboardShell topbarTitle="Employees" topbarTrailing={<Avatar size="sm" fallback="MS" />}>
        <div className="flex flex-col items-center justify-center gap-4 py-12">
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
  const subtitle = `${employee.employeeId} · ${employee.position}`;
  const initials =
    employee.firstName.charAt(0) + employee.lastName.charAt(0);

  const activeTabItem = EMPLOYEE_EDIT_TABS.find((t) => t.key === activeTab);
  const sectionLabel = activeTabItem?.label ?? "Section";
  const dataId = employee.id;
  const accessData = getMockEmployeeAccess(dataId);
  const taxData = getMockEmployeeTax(dataId);
  const salaryData = getMockEmployeeSalary(dataId);
  const govIdsData = getMockEmployeeGovIds(dataId);
  const employmentData = getMockEmployeeEmployment(dataId);

  return (
    <DashboardShell
      topbarTitle="Edit"
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
          <NextLink href="/employees" className="hover:text-foreground">
            Employees
          </NextLink>
          <span aria-hidden>›</span>
          <NextLink href={`/employees/${id}`} className="hover:text-foreground">
            {displayName}
          </NextLink>
          <span aria-hidden>›</span>
          <span className="font-medium text-foreground">Edit</span>
        </nav>

        <div className="border-b border-border bg-card px-1 py-2">
          <EmployeeEditTabs
            tabs={EMPLOYEE_EDIT_TABS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        <EmployeeEditHeader
          displayName={displayName}
          subtitle={subtitle}
          avatar={<Avatar size="lg" fallback={initials} />}
          onChangePhoto={() => {}}
        />

        {activeTab === "access" ? (
          <Card className="border border-border rounded-xl p-6">
            <EmployeeEditAccessSection
              defaultValues={
                accessData
                  ? {
                      portalEnabled: accessData.portalEnabled,
                      loginEmail: accessData.loginEmail,
                      adminRole: accessData.adminRole,
                    }
                  : undefined
              }
              lastLogin={accessData?.lastLogin}
              onSubmit={() => {}}
              onResetPassword={() => {}}
              onResendWelcomeEmail={() => {}}
              onRevokeAccess={() => {}}
            />
          </Card>
        ) : activeTab === "salary" ? (
          <Card className="mt-6 border border-border rounded-xl p-6">
            <EmployeeEditSalarySection
              defaultValues={
                salaryData
                  ? {
                      basicSalaryRate: salaryData.basicSalaryRate,
                      payFrequency: salaryData.payFrequency,
                      dailyRate: salaryData.dailyRate,
                      mealAllowanceEnabled: salaryData.mealAllowanceEnabled,
                      mealAllowanceAmount: salaryData.mealAllowanceAmount,
                      riceSubsidyEnabled: salaryData.riceSubsidyEnabled,
                      riceSubsidyAmount: salaryData.riceSubsidyAmount,
                      transportationEnabled: salaryData.transportationEnabled,
                      transportationAmount: salaryData.transportationAmount,
                      payMode: salaryData.payMode,
                      bankName: salaryData.bankName,
                      accountNumber: salaryData.accountNumber,
                      accountName: salaryData.accountName,
                    }
                  : undefined
              }
              currentSalaryDisplay={salaryData?.currentSalaryDisplay}
              onSubmit={() => {}}
            />
          </Card>
        ) : activeTab === "govids" ? (
          <Card className="mt-6 border border-border rounded-xl p-6">
            <EmployeeEditGovIdsSection
              defaultValues={
                govIdsData
                  ? {
                      sssNumber: govIdsData.sssNumber,
                      sssContributionType: govIdsData.sssContributionType,
                      philHealthNumber: govIdsData.philHealthNumber,
                      philHealthMembershipType: govIdsData.philHealthMembershipType,
                      pagIbigMidNumber: govIdsData.pagIbigMidNumber,
                      pagIbigMonthlyContribution: govIdsData.pagIbigMonthlyContribution,
                      tin: govIdsData.tin,
                      rdoCode: govIdsData.rdoCode,
                      rdoName: govIdsData.rdoName,
                    }
                  : undefined
              }
              sssStatus={govIdsData?.sssStatus}
              philHealthStatus={govIdsData?.philHealthStatus}
              pagIbigStatus={govIdsData?.pagIbigStatus}
              birStatus={govIdsData?.birStatus}
              onSubmit={() => {}}
            />
          </Card>
        ) : activeTab === "employment" ? (
          <Card className="mt-6 border border-border rounded-xl p-6">
            <EmployeeEditEmploymentSection
              defaultValues={employmentData}
              onSubmit={() => {}}
            />
          </Card>
        ) : activeTab === "tax" ? (
          <Card className="mt-6 border border-border rounded-xl p-6">
            <EmployeeEditTaxSection
              defaultValues={
                taxData
                  ? {
                      mweExempt: taxData.mweExempt,
                      taxStatus: taxData.taxStatus,
                      qualifiedDependents: taxData.qualifiedDependents,
                      withholdingAgent: taxData.withholdingAgent,
                      thirteenthMonthEligible: taxData.thirteenthMonthEligible,
                    }
                  : undefined
              }
              ytdSummary={taxData?.ytdSummary}
              onSubmit={() => {}}
            />
          </Card>
        ) : (
          <Card className="border border-border rounded-xl p-6">
            <Text variant="body" as="p" className="text-muted-foreground">
              Content for {sectionLabel}. Section-specific forms and fields are
              implemented in separate plans.
            </Text>
          </Card>
        )}

        <div className="flex items-center justify-between py-2">
          <NextLink
            href={`/employees/${id}`}
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Cancel
          </NextLink>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
            >
              Save & Stay
            </button>
            <button
              type="button"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110"
            >
              Save Changes →
            </button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
