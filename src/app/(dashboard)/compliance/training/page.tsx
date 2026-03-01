"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import {
  ComplianceTrainingTable,
  ComplianceTrainingToolbar,
  SettingsLayout,
} from "@/components/organisms";
import { MOCK_TRAINING } from "@/data/mocks/mockCompliance";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { DashboardShell } from "../../_components/DashboardShell";
import { ComplianceNav } from "../_lib/complianceNav";

const TYPE_OPTIONS = [
  { value: "all", label: "All types" },
  { value: "Compliance", label: "Compliance" },
  { value: "Safety", label: "Safety" },
  { value: "Optional", label: "Optional" },
];

export default function ComplianceTrainingPage() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredRows = useMemo(() => {
    let list = MOCK_TRAINING;
    if (typeFilter !== "all") {
      list = list.filter((r) => r.type === typeFilter);
    }
    if (searchValue.trim()) {
      const q = searchValue.trim().toLowerCase();
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.employeeName.toLowerCase().includes(q)
      );
    }
    return list;
  }, [searchValue, typeFilter]);

  const nav = <ComplianceNav currentHref="/compliance/training" />;

  return (
    <DashboardShell
      topbarTitle="Compliance"
      topbarSubtitle="Mandatory and recurring training tracker"
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
          <ComplianceTrainingToolbar
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            typeFilter={typeFilter}
            onTypeFilterChange={setTypeFilter}
            typeOptions={TYPE_OPTIONS}
            onAddTrainingClick={() => router.push("/compliance/training/new")}
          />

          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <ComplianceTrainingTable
              rows={filteredRows}
              onView={(id) => router.push(`/compliance/training/${id}`)}
            />
          </div>
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
