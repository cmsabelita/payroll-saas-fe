"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { EmployeeNewWizard } from "@/components/organisms";
import type { EmployeeNewWizardFormValues } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { DashboardShell } from "../../_components/DashboardShell";

export default function AddEmployeePage() {
  const handleSubmit = (data: EmployeeNewWizardFormValues) => {
    void data;
    window.location.href = "/employees";
  };

  return (
    <DashboardShell
      topbarTitle="Add Employee"
      topbarSubtitle="Employees"
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
        <EmployeeNewWizard
          onSubmit={handleSubmit}
          onCancel={() => {
            window.location.href = "/employees";
          }}
        />
      </div>
    </DashboardShell>
  );
}
