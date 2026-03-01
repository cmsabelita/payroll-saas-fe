"use client";

import { Avatar, Button, FaIcon, IconButton } from "@/components/atoms";
import { TeamMemberDetail } from "@/components/organisms";
import { faBell, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { DashboardShell } from "../../_components/DashboardShell";

export default function TeamMemberPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";

  return (
    <DashboardShell
      topbarTitle="Team Member"
      topbarSubtitle="Manage role and permissions"
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
        <nav className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <NextLink href="/team" className="flex items-center gap-1 hover:text-foreground">
              <FaIcon icon={faChevronLeft} size="sm" />
              Team
            </NextLink>
            <span aria-hidden>/</span>
            <span className="font-medium text-foreground">Member {id || "—"}</span>
          </div>
          <Button variant="outline" size="md">Edit</Button>
        </nav>
        <TeamMemberDetail
          name="Maria Santos"
          email="maria@acme.com"
          role="HR"
          status="active"
          avatarFallback="MS"
          lastActive="2 hrs ago"
          joined="Mar 1, 2022"
          permissions={["View employees", "Edit leave", "Run reports"]}
        />
      </div>
    </DashboardShell>
  );
}
