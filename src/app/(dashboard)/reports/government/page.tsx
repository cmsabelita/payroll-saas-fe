"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { ReportGovernmentSection, SettingsLayout } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DashboardShell } from "../../_components/DashboardShell";
import { ReportsNav } from "../_lib/reportsNav";

const YEAR_OPTIONS = [{ value: "2026", label: "2026" }, { value: "2025", label: "2025" }];
const GOV_ITEMS = [
  { id: "alphalist", name: "Alphalist (BIR)", description: "Annual alphabetical list of employees", period: "Full year" },
  { id: "2316", name: "BIR 2316", description: "Certificate of Compensation and Tax Withheld", period: "Full year" },
  { id: "1601c", name: "BIR 1601-C", description: "Monthly remittance of withholding tax", period: "By month" },
  { id: "sss", name: "SSS R-3", description: "SSS contribution collection list", period: "By month" },
  { id: "philhealth", name: "PhilHealth", description: "PhilHealth premium report", period: "By month" },
  { id: "pagibig", name: "Pag-IBIG", description: "HDMF contribution report", period: "By month" },
];

export default function ReportsGovernmentPage() {
  const [year, setYear] = useState("2026");

  return (
    <DashboardShell
      topbarTitle="Reports"
      topbarSubtitle="Export and view reports"
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
        <SettingsLayout nav={<ReportsNav currentHref="/reports/government" />}>
          <ReportGovernmentSection
            yearOptions={YEAR_OPTIONS}
            selectedYear={year}
            onYearChange={setYear}
            items={GOV_ITEMS}
            onExport={(id) => console.log("Export", id)}
            onGenerate={(id) => console.log("Generate", id)}
          />
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
