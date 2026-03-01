"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { AlertBanner } from "@/components/molecules/AlertBanner";
import {
  ComplianceDisciplinaryTable,
  ComplianceDisciplinaryToolbar,
  SettingsLayout,
} from "@/components/organisms";
import { MOCK_DISCIPLINARY } from "@/data/mocks/mockCompliance";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { DashboardShell } from "../../_components/DashboardShell";
import { ComplianceNav } from "../_lib/complianceNav";

const STATUS_OPTIONS = [
  { value: "all", label: "All Statuses" },
  { value: "open", label: "Open" },
  { value: "pending_hearing", label: "Pending Hearing" },
  { value: "closed", label: "Closed" },
  { value: "sealed", label: "Sealed" },
];

export default function ComplianceDisciplinaryPage() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredRows = useMemo(() => {
    let list = MOCK_DISCIPLINARY;
    if (statusFilter !== "all") {
      list = list.filter((r) => r.status === statusFilter);
    }
    if (searchValue.trim()) {
      const q = searchValue.trim().toLowerCase();
      list = list.filter(
        (r) =>
          r.employeeName.toLowerCase().includes(q) ||
          r.caseNumber.toLowerCase().includes(q)
      );
    }
    return list;
  }, [searchValue, statusFilter]);

  const stats = useMemo(() => ({
    ytd: MOCK_DISCIPLINARY.length,
    closed: MOCK_DISCIPLINARY.filter((r) => r.status === "closed").length,
    pendingHearing: MOCK_DISCIPLINARY.filter((r) => r.status === "pending_hearing").length,
    sealed: MOCK_DISCIPLINARY.filter((r) => r.status === "sealed").length,
  }), []);

  const nav = <ComplianceNav currentHref="/compliance/disciplinary" />;

  return (
    <DashboardShell
      topbarTitle="Compliance"
      topbarSubtitle="Notice to Explain, hearing records & disciplinary actions"
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
          <AlertBanner
            variant="info"
            title="Records are confidential and accessible only to HR Admin and above. All NTEs and actions are logged for audit trail compliance."
          />

          <div className="grid grid-cols-4 gap-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <Text variant="caption" as="p" className="text-muted-foreground">YTD Cases</Text>
              <Text variant="body" as="p" className="mt-1 text-xl font-bold text-foreground">{stats.ytd}</Text>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Text variant="caption" as="p" className="text-muted-foreground">Closed</Text>
              <Text variant="body" as="p" className="mt-1 text-xl font-bold text-foreground">{stats.closed}</Text>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Text variant="caption" as="p" className="text-muted-foreground">Pending Hearing</Text>
              <Text variant="body" as="p" className="mt-1 text-xl font-bold text-foreground">{stats.pendingHearing}</Text>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Text variant="caption" as="p" className="text-muted-foreground">Sealed Records</Text>
              <Text variant="body" as="p" className="mt-1 text-xl font-bold text-foreground">{stats.sealed}</Text>
            </div>
          </div>

          <ComplianceDisciplinaryToolbar
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            statusOptions={STATUS_OPTIONS}
            onIssueNteClick={() => router.push("/compliance/disciplinary/new")}
          />

          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <ComplianceDisciplinaryTable
              rows={filteredRows}
              onView={(id) => router.push(`/compliance/disciplinary/${id}`)}
            />
          </div>
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
