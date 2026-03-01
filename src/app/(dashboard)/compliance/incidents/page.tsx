"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import {
  ComplianceIncidentsTable,
  ComplianceIncidentsToolbar,
  SettingsLayout,
} from "@/components/organisms";
import type { ComplianceIncidentsTableRow } from "@/components/organisms/ComplianceIncidentsTable";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DashboardShell } from "../../_components/DashboardShell";
import { ComplianceNav } from "../_lib/complianceNav";

const MOCK_ROWS: ComplianceIncidentsTableRow[] = [
  { id: "1", ref: "INC-001", employeeName: "Juan Dela Cruz", date: "Feb 20, 2026", type: "Safety", status: "Open" },
  { id: "2", ref: "INC-002", employeeName: "Maria Santos", date: "Feb 18, 2026", type: "Policy", status: "Closed" },
];

export default function ComplianceIncidentsPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const nav = <ComplianceNav currentHref="/compliance/incidents" />;

  return (
    <DashboardShell
      topbarTitle="Compliance"
      topbarSubtitle="Report and track incidents"
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
        <SettingsLayout nav={nav}>
          <ComplianceIncidentsToolbar
            searchValue={search}
            onSearchChange={setSearch}
            onAddClick={() => router.push("/compliance/incidents/new")}
          />
          <ComplianceIncidentsTable rows={MOCK_ROWS} onView={(id) => router.push(`/compliance/incidents/${id}`)} />
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
