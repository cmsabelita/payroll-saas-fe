"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { AttendanceDetailSection } from "@/components/organisms";
import { faBell, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { DashboardShell } from "../../_components/DashboardShell";

export default function AttendanceDetailPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";

  return (
    <DashboardShell
      topbarTitle="Attendance Detail"
      topbarSubtitle="Single attendance record"
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
          <NextLink href="/attendance" className="flex items-center gap-1 hover:text-foreground">
            <FaIcon icon={faChevronLeft} size="sm" />
            Attendance
          </NextLink>
          <span aria-hidden>/</span>
          <span className="font-medium text-foreground">Record {id || "—"}</span>
        </nav>
        <AttendanceDetailSection
          employeeName="Maria Santos"
          employeeId={id}
          date="Feb 28, 2026"
          timeIn="08:15"
          timeOut="17:30"
          hours="8.5"
          status="Present"
          breakMinutes={60}
          overtimeMinutes={0}
        />
      </div>
    </DashboardShell>
  );
}
