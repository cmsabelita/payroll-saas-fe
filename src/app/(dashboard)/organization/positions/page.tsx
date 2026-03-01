"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { OrganizationPositionsSection } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { DashboardShell } from "../../_components/DashboardShell";

const MOCK_POSITIONS = [
  { id: "1", title: "Software Engineer", department: "IT", headCount: 8 },
  { id: "2", title: "HR Manager", department: "HR", headCount: 1 },
  { id: "3", title: "Accountant", department: "Finance", headCount: 4 },
  { id: "4", title: "Operations Lead", department: "Operations", headCount: 3 },
];

export default function OrganizationPositionsPage() {
  const router = useRouter();

  return (
    <DashboardShell
      topbarTitle="Positions"
      topbarSubtitle="Job positions"
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
        <OrganizationPositionsSection
          rows={MOCK_POSITIONS}
          onAdd={() => {}}
          onView={(id) => router.push(`/organization/positions/${id}`)}
        />
      </div>
    </DashboardShell>
  );
}
