"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { ApprovalsTable } from "@/components/organisms";
import { KpiCard, Pagination, PendingApprovalRow, SearchBar, TabFilter } from "@/components/molecules";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DashboardShell } from "../_components/DashboardShell";

const TABS = [
  { key: "pending", label: "Pending", count: 5 },
  { key: "approved", label: "Approved" },
  { key: "rejected", label: "Rejected" },
];
const KPI_ITEMS = [
  { value: "5", label: "Pending approvals", badge: "+2" },
  { value: "12", label: "Approved this week" },
  { value: "3", label: "Rejected" },
];

export default function ApprovalsPage() {
  const router = useRouter();
  const [tab, setTab] = useState("pending");

  return (
    <DashboardShell
      topbarTitle="Approvals"
      topbarSubtitle="Pending leave, OT, and requests — mock data"
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
        <ApprovalsTable
          kpiStrip={
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="region" aria-label="Key metrics">
              {KPI_ITEMS.map((item, i) => (
                <KpiCard key={i} value={item.value} label={item.label} badge={item.badge} />
              ))}
            </div>
          }
          tabFilter={<TabFilter tabs={TABS} value={tab} onChange={setTab} />}
          toolbar={<SearchBar placeholder="Search requests" className="max-w-xs" />}
          pagination={
            <Pagination
              start={1}
              end={5}
              total={5}
              page={1}
              totalPages={1}
              onPrev={() => {}}
              onNext={() => {}}
              hasPrev={false}
              hasNext={false}
            />
          }
        >
          <div className="divide-y divide-border px-4 py-2">
            <PendingApprovalRow
              avatar={<Avatar size="sm" fallback="JD" />}
              primaryText="Jane Doe"
              secondaryText="Leave request · 15–20 Feb 2026"
              badge="Pending"
              onClick={() => router.push("/approvals/1")}
            />
            <PendingApprovalRow
              avatar={<Avatar size="sm" fallback="BS" />}
              primaryText="Bob Smith"
              secondaryText="OT request · 4 hrs · Feb 25"
              badge="Pending"
              onClick={() => router.push("/approvals/2")}
            />
            <PendingApprovalRow
              avatar={<Avatar size="sm" fallback="RP" />}
              primaryText="Rosa Perez"
              secondaryText="Leave request · Mar 1–3"
              badge="Pending"
              onClick={() => router.push("/approvals/3")}
            />
          </div>
        </ApprovalsTable>
      </div>
    </DashboardShell>
  );
}
