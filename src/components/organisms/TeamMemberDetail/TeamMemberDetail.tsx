"use client";

import { Avatar, Badge, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { TeamMemberDetailProps } from "./TeamMemberDetail.types";

const STATUS_VARIANT: Record<TeamMemberDetailProps["status"], "success" | "warning" | "destructive"> = {
  active: "success",
  invited: "warning",
  suspended: "destructive",
};

export function TeamMemberDetail({
  name,
  email,
  role,
  status,
  avatarFallback,
  lastActive,
  joined,
  permissions = [],
  className,
}: TeamMemberDetailProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex flex-wrap items-start gap-4 rounded-xl border border-border bg-card p-6">
        <Avatar size="lg" fallback={avatarFallback} />
        <div className="min-w-0 flex-1">
          <Text variant="body" as="h2" className="font-semibold text-foreground">{name}</Text>
          <Text variant="caption" as="p" className="text-muted-foreground">{email}</Text>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{role}</Badge>
            <Badge variant={STATUS_VARIANT[status]}>{status}</Badge>
          </div>
          {lastActive != null && (
            <Text variant="caption" as="p" className="mt-2 text-muted-foreground">Last active: {lastActive}</Text>
          )}
          {joined != null && (
            <Text variant="caption" as="p" className="text-muted-foreground">Joined: {joined}</Text>
          )}
        </div>
      </div>
      {permissions.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-6">
          <Text variant="body" as="h3" className="mb-3 font-semibold text-foreground">Permissions</Text>
          <ul className="list-inside list-disc text-sm text-muted-foreground">
            {permissions.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
