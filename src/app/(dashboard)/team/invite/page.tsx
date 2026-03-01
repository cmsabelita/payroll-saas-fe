"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { InviteMemberForm } from "@/components/organisms";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { DashboardShell } from "../../_components/DashboardShell";

export default function TeamInvitePage() {
  const router = useRouter();

  return (
    <DashboardShell
      topbarTitle="Invite Member"
      topbarSubtitle="Add a team member to the dashboard"
      topbarTrailing={
        <>
          <IconButton variant="ghost" size="sm" aria-label="Notifications">
            <FaIcon icon={faBell} size="sm" />
          </IconButton>
          <Avatar size="sm" fallback="MS" />
        </>
      }
    >
      <div className="mx-auto flex max-w-lg flex-col gap-6">
        <InviteMemberForm
          title="Invite a team member"
          subtitle="They will receive an email to set their password and access the dashboard."
          cancelHref="/team"
          onSubmit={(values) => {
            console.log("Invite", values);
            router.push("/team");
          }}
        />
      </div>
    </DashboardShell>
  );
}
