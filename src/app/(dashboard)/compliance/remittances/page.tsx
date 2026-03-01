"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import {
  ComplianceRemittancesTable,
  ComplianceRemittancesToolbar,
  SettingsLayout,
} from "@/components/organisms";
import type { ComplianceRemittancesTableRow } from "@/components/organisms/ComplianceRemittancesTable";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DashboardShell } from "../../_components/DashboardShell";
import { ComplianceNav } from "../_lib/complianceNav";

const MOCK_ROWS: ComplianceRemittancesTableRow[] = [
  { id: "1", agency: "SSS", period: "Feb 2026", amount: "₱45,200", status: "Paid", dueDate: "Mar 15, 2026" },
  { id: "2", agency: "PhilHealth", period: "Feb 2026", amount: "₱28,400", status: "Pending", dueDate: "Mar 15, 2026" },
  { id: "3", agency: "Pag-IBIG", period: "Feb 2026", amount: "₱18,000", status: "Pending", dueDate: "Mar 15, 2026" },
];

export default function ComplianceRemittancesPage() {
  const router = useRouter();
  const [period, setPeriod] = useState("2026-02");

  const nav = <ComplianceNav currentHref="/compliance/remittances" />;

  return (
    <DashboardShell
      topbarTitle="Compliance"
      topbarSubtitle="SSS, PhilHealth, HDMF government remittances"
      topbarTrailing={
        <>
          <IconButton variant="ghost" size="sm" aria-label="Notifications">
            <FaIcon icon={faBell} size="sm" />
          </IconButton>
          <Avatar size="sm" fallback="MS" />
        </>
      }
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4">
        <SettingsLayout nav={nav}>
          <ComplianceRemittancesToolbar
            periodOptions={[{ value: "2026-02", label: "Feb 2026" }, { value: "2026-01", label: "Jan 2026" }]}
            selectedPeriod={period}
            onPeriodChange={setPeriod}
            onAddClick={() => router.push("/compliance/remittances/new")}
          />
          <ComplianceRemittancesTable rows={MOCK_ROWS} />
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
