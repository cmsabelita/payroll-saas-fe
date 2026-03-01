"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { PayrollNewForm } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { DashboardShell } from "../../_components/DashboardShell";

export default function PayrollNewPage() {
  const router = useRouter();

  return (
    <DashboardShell
      topbarTitle="New Payroll Period"
      topbarTrailing={
        <>
          <IconButton variant="ghost" size="sm" aria-label="Notifications">
            <FaIcon icon={faBell} size="sm" />
          </IconButton>
          <Avatar size="sm" fallback="MS" />
        </>
      }
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <NextLink href="/payroll" className="hover:text-foreground">
            Payroll
          </NextLink>
          <span aria-hidden>›</span>
          <span className="font-medium text-foreground">New Payroll Period</span>
        </nav>
        <PayrollNewForm
          lastPeriodLabel="Feb 2026 · 1st Half"
          lastPeriodDetail="Feb 1–15, 2026 · Paid · Net ₱1,826,730"
          onSubmit={() => router.push("/payroll")}
          onCancel={() => router.push("/payroll")}
        />
      </div>
    </DashboardShell>
  );
}
