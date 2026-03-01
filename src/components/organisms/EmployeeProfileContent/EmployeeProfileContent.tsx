"use client";

import { useState } from "react";
import { Text } from "@/components/atoms";
import { InfoRow } from "@/components/molecules/InfoRow";
import { cn } from "@/utils";
import type { EmployeeProfileContentProps } from "./EmployeeProfileContent.types";

const DEFAULT_TABS = [
  { key: "overview", label: "Overview" },
  { key: "salary", label: "Salary" },
  { key: "govids", label: "Gov IDs" },
  { key: "tax", label: "Tax Info" },
  { key: "leave", label: "Leave" },
  { key: "attendance", label: "Attendance" },
  { key: "loans", label: "Loans" },
  { key: "documents", label: "Documents" },
];

export function EmployeeProfileContent({
  employmentDetails,
  personalInfo,
  emergencyContact,
  tabs = DEFAULT_TABS,
  activeTab: controlledTab,
  onTabChange,
  className,
}: EmployeeProfileContentProps) {
  const [internalTab, setInternalTab] = useState("overview");
  const activeTab = controlledTab ?? internalTab;
  const setTab = onTabChange ?? setInternalTab;

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card overflow-hidden",
        className
      )}
    >
      <div className="flex border-b border-border overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.key}
            onClick={() => setTab(tab.key)}
            className={cn(
              "shrink-0 border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
              activeTab === tab.key
                ? "border-primary text-primary font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-5">
        {activeTab === "overview" && (
          <>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <Text
                  as="h3"
                  variant="label"
                  className="mb-3 font-semibold text-foreground"
                >
                  Employment Details
                </Text>
                <div className="divide-y divide-border">
                  <InfoRow
                    label="Employee ID"
                    value={<span className="font-mono">{employmentDetails.employeeId}</span>}
                    labelClassName="w-40"
                    className="py-2.5"
                  />
                  <InfoRow label="Employment Type" value={employmentDetails.employmentType} labelClassName="w-40" className="py-2.5" />
                  <InfoRow label="Position" value={employmentDetails.position} labelClassName="w-40" className="py-2.5" />
                  <InfoRow label="Department" value={employmentDetails.department} labelClassName="w-40" className="py-2.5" />
                  {employmentDetails.team != null && (
                    <InfoRow label="Team" value={employmentDetails.team} labelClassName="w-40" className="py-2.5" />
                  )}
                  <InfoRow label="Work Schedule" value={employmentDetails.workSchedule} labelClassName="w-40" className="py-2.5" />
                  <InfoRow label="Work Location" value={employmentDetails.workLocation} labelClassName="w-40" className="py-2.5" />
                  <InfoRow label="Reporting Manager" value={employmentDetails.reportingManager} labelClassName="w-40" className="py-2.5" />
                </div>
              </div>
              <div>
                <Text
                  as="h3"
                  variant="label"
                  className="mb-3 font-semibold text-foreground"
                >
                  Personal Information
                </Text>
                <div className="divide-y divide-border">
                  <InfoRow label="Date of Birth" value={personalInfo.dateOfBirth} labelClassName="w-40" className="py-2.5" />
                  <InfoRow label="Gender" value={personalInfo.gender} labelClassName="w-40" className="py-2.5" />
                  <InfoRow label="Civil Status" value={personalInfo.civilStatus} labelClassName="w-40" className="py-2.5" />
                  <InfoRow label="Nationality" value={personalInfo.nationality} labelClassName="w-40" className="py-2.5" />
                  <InfoRow label="Address" value={personalInfo.address} labelClassName="w-40" className="py-2.5" />
                  <InfoRow label="Personal Email" value={personalInfo.personalEmail} labelClassName="w-40" className="py-2.5" />
                  <InfoRow label="Mobile" value={personalInfo.mobile} labelClassName="w-40" className="py-2.5" />
                </div>
              </div>
            </div>
            <div className="mt-5 border-t border-border pt-5">
              <Text
                as="h3"
                variant="label"
                className="mb-3 font-semibold text-foreground"
              >
                Emergency Contact
              </Text>
              <div className="flex flex-wrap items-center gap-8 rounded-xl bg-muted/50 p-4">
                <div>
                  <Text variant="caption" as="p" className="mb-0.5 text-muted-foreground">
                    Contact Name
                  </Text>
                  <Text variant="body" as="p" className="font-semibold text-foreground">
                    {emergencyContact.contactName}
                  </Text>
                </div>
                <div className="h-8 w-px bg-border" aria-hidden />
                <div>
                  <Text variant="caption" as="p" className="mb-0.5 text-muted-foreground">
                    Relationship
                  </Text>
                  <Text variant="body" as="p" className="font-semibold text-foreground">
                    {emergencyContact.relationship}
                  </Text>
                </div>
                <div className="h-8 w-px bg-border" aria-hidden />
                <div>
                  <Text variant="caption" as="p" className="mb-0.5 text-muted-foreground">
                    Phone
                  </Text>
                  <Text variant="body" as="p" className="font-semibold text-foreground">
                    {emergencyContact.phone}
                  </Text>
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab !== "overview" && (
          <Text variant="body" as="p" className="text-muted-foreground">
            Content for {tabs.find((t) => t.key === activeTab)?.label ?? activeTab} will be implemented in separate plans.
          </Text>
        )}
      </div>
    </div>
  );
}
