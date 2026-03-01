"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { OrganizationDepartmentsSection } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { DashboardShell } from "../../_components/DashboardShell";

const MOCK_DEPARTMENTS = [
  { id: "1", name: "Information Technology", code: "IT", headCount: 15, parent: undefined },
  { id: "2", name: "Human Resources", code: "HR", headCount: 8, parent: undefined },
  { id: "3", name: "Finance & Accounting", code: "FIN", headCount: 12, parent: undefined },
  { id: "4", name: "Operations", code: "OPS", headCount: 22, parent: undefined },
];

export default function OrganizationDepartmentsPage() {
  const router = useRouter();

  return (
    <DashboardShell
      topbarTitle="Departments"
      topbarSubtitle="Company departments"
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
        <OrganizationDepartmentsSection
          rows={MOCK_DEPARTMENTS}
          onAdd={() => {}}
          onView={(id) => router.push(`/organization/departments/${id}`)}
        />
      </div>
    </DashboardShell>
  );
}
