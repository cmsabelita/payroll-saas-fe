"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { TeamTable, TeamToolbar } from "@/components/organisms";
import type { TeamTableRow } from "@/components/organisms/TeamTable";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { DashboardShell } from "../_components/DashboardShell";

const MOCK_TEAM: TeamTableRow[] = [
  {
    id: "1",
    name: "Mark Santos",
    email: "mark@acme.com",
    avatarFallback: "MS",
    role: "Owner",
    status: "active",
    lastActive: "Just now",
    joined: "Feb 1, 2023",
  },
  {
    id: "2",
    name: "Maria Santos",
    email: "maria@acme.com",
    avatarFallback: "MS",
    role: "HR",
    status: "active",
    lastActive: "2 hrs ago",
    joined: "Mar 1, 2022",
  },
  {
    id: "3",
    name: "Rosa Perez",
    email: "rosa.p@acme.com",
    avatarFallback: "RP",
    role: "Accountant",
    status: "active",
    lastActive: "Yesterday",
    joined: "Jun 7, 2022",
  },
  {
    id: "4",
    name: "Alonzo Cruz",
    email: "alonzo@acme.com",
    avatarFallback: "AC",
    role: "Manager",
    status: "active",
    lastActive: "Feb 25",
    joined: "Sep 12, 2021",
  },
  {
    id: "5",
    name: "Patrick Gomez",
    email: "patrick@acme.com",
    avatarFallback: "PG",
    role: "Admin",
    status: "invited",
    lastActive: "Never",
    joined: "—",
  },
  {
    id: "6",
    name: "Lourdes Reyes",
    email: "lourdes@acme.com",
    avatarFallback: "LR",
    role: "Viewer",
    status: "suspended",
    lastActive: "Jan 15",
    joined: "Nov 8, 2022",
  },
];

export default function TeamPage() {
  const router = useRouter();

  return (
    <DashboardShell
      topbarTitle="Team"
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
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-foreground">Team</h1>
          <TeamToolbar onInviteClick={() => router.push("/team/invite")} />
        </div>

        <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs text-primary">
          Team members are company users with access to the Payro dashboard. This is separate from employee portal access, which is managed automatically.
        </div>

        <TeamTable
          rows={MOCK_TEAM}
          onManage={(id) => router.push(`/team/${id}`)}
          onResend={(id) => console.log("Resend", id)}
          onRevoke={(id) => console.log("Revoke", id)}
          onReactivate={(id) => console.log("Reactivate", id)}
        />
      </div>
    </DashboardShell>
  );
}
