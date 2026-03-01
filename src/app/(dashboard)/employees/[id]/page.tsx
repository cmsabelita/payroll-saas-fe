"use client";

import { Avatar, Badge, FaIcon, IconButton, Text } from "@/components/atoms";
import {
  EmployeeProfileContent,
  EmployeeProfileHeader,
} from "@/components/organisms";
import { getMockEmployeeById, getMockEmployeeProfile } from "@/data/mocks/mockEmployees";
import { faBell, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { DashboardShell } from "../../_components/DashboardShell";

export default function EmployeeProfilePage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const employee = getMockEmployeeById(id);
  const profile = employee ? getMockEmployeeProfile(employee.id) : undefined;

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

  const initials =
    employee.firstName.charAt(0) + employee.lastName.charAt(0);
  const displayName = profile?.displayName ?? `${employee.firstName} ${employee.lastName}`;
  const subtitle = profile
    ? `${profile.position} · ${profile.department}`
    : `${employee.employeeId} · ${employee.position}`;

  const statusBadges = profile ? (
    <>
      <Badge variant="success">{profile.employmentStatus}</Badge>
      <Badge variant="secondary">{profile.employmentType}</Badge>
    </>
  ) : null;

  const reportsTo = profile?.reportingManager ? (
    <>
      Reports to:{" "}
      <NextLink href="#" className="font-medium text-primary hover:underline">
        {profile.reportingManager}
      </NextLink>
    </>
  ) : undefined;

  const stats = profile
    ? [
        ...(profile.dateHired
          ? [
              {
                value: `Hired ${profile.dateHired}`,
                label: profile.tenureYears != null ? `${profile.tenureYears} yrs` : "",
              },
            ]
          : []),
        ...(profile.salaryDisplay
          ? [{ value: profile.salaryDisplay, label: "/mo" }]
          : []),
        ...(profile.vlDaysRemaining != null
          ? [{ value: String(profile.vlDaysRemaining), label: "VL days remaining" }]
          : []),
        ...(profile.pendingRequests != null
          ? [{ value: String(profile.pendingRequests), label: "pending requests" }]
          : []),
      ]
    : undefined;

  const employmentDetails = profile
    ? {
        employeeId: profile.employeeId,
        employmentType: profile.employmentType,
        position: profile.position,
        department: profile.department,
        workSchedule: profile.workSchedule,
        workLocation: profile.workLocation,
        reportingManager: (
          <NextLink href="#" className="text-primary hover:underline">
            {profile.reportingManager}
          </NextLink>
        ),
      }
    : {
        employeeId: employee.employeeId,
        employmentType: "—",
        position: employee.position,
        department: "—",
        workSchedule: "—",
        workLocation: "—",
        reportingManager: "—",
      };

  const personalInfo = profile
    ? {
        dateOfBirth: profile.dateOfBirth,
        gender: profile.gender,
        civilStatus: profile.civilStatus,
        nationality: profile.nationality,
        address: profile.address,
        personalEmail: (
          <NextLink
            href={`mailto:${profile.personalEmail}`}
            className="text-primary hover:underline"
          >
            {profile.personalEmail}
          </NextLink>
        ),
        mobile: profile.mobile,
      }
    : {
        dateOfBirth: "—",
        gender: "—",
        civilStatus: "—",
        nationality: "—",
        address: "—",
        personalEmail: "—",
        mobile: "—",
      };

  const emergencyContact = profile
    ? {
        contactName: profile.emergencyContactName,
        relationship: profile.emergencyRelationship,
        phone: profile.emergencyPhone,
      }
    : {
        contactName: "—",
        relationship: "—",
        phone: "—",
      };

  return (
    <DashboardShell
      topbarTitle={displayName}
      topbarTrailing={
        <>
          <NextLink
            href={`/employees/${id}/edit`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:bg-muted"
          >
            <FaIcon icon={faPenToSquare} size="sm" aria-hidden />
            Edit Profile
          </NextLink>
          <IconButton variant="ghost" size="sm" aria-label="Notifications">
            <FaIcon icon={faBell} size="sm" />
          </IconButton>
          <Avatar size="sm" fallback="MS" />
        </>
      }
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <NextLink href="/employees" className="hover:text-foreground">
            Employees
          </NextLink>
          <span aria-hidden>›</span>
          <span className="font-medium text-foreground">{displayName}</span>
        </nav>

        <EmployeeProfileHeader
          displayName={displayName}
          avatar={<Avatar size="lg" fallback={initials} />}
          statusBadges={statusBadges ?? <Badge variant="secondary">—</Badge>}
          subtitle={subtitle}
          reportsTo={reportsTo}
          stats={stats}
          onProcessSeparation={() => {}}
        />

        <EmployeeProfileContent
          employmentDetails={employmentDetails}
          personalInfo={personalInfo}
          emergencyContact={emergencyContact}
        />
      </div>
    </DashboardShell>
  );
}
