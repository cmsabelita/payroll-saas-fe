"use client";

import { Avatar, Button, FaIcon, IconButton } from "@/components/atoms";
import { ApprovalsDetailSection } from "@/components/organisms";
import { faBell, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { DashboardShell } from "../../_components/DashboardShell";

export default function ApprovalDetailPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";

  return (
    <DashboardShell
      topbarTitle="Approval Detail"
      topbarSubtitle="Review request"
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
          <NextLink href="/approvals" className="flex items-center gap-1 hover:text-foreground">
            <FaIcon icon={faChevronLeft} size="sm" />
            Approvals
          </NextLink>
          <span aria-hidden>/</span>
          <span className="font-medium text-foreground">Request {id || "—"}</span>
        </nav>
        <ApprovalsDetailSection
          requestType="Leave"
          requesterName="Jane Doe"
          requesterEmail="jane@acme.com"
          status="pending"
          submittedAt="Feb 25, 2026"
          period="15–20 Feb 2026"
          details="Annual leave — 5 days"
        />
        <div className="flex gap-2">
          <Button>Approve</Button>
          <Button variant="destructive">Reject</Button>
        </div>
      </div>
    </DashboardShell>
  );
}
