"use client";

import { Avatar, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { TeamTableProps, TeamMemberStatus } from "./TeamTable.types";

const statusStyles: Record<TeamMemberStatus, string> = {
  active: "bg-primary/10 text-primary",
  invited: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  suspended: "bg-destructive/10 text-destructive",
};

export function TeamTable({
  rows,
  onManage,
  onResend,
  onRevoke,
  onReactivate,
  className,
}: TeamTableProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card",
        className
      )}
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Member
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Role
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Last Active
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Joined
              </th>
              <th className="w-32 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => (
              <tr
                key={row.id}
                className="transition-colors hover:bg-muted/50"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar size="sm" fallback={row.avatarFallback} />
                    <div>
                      <Text variant="body" as="p" className="font-semibold text-foreground">
                        {row.name}
                      </Text>
                      <Text variant="caption" as="p" className="text-muted-foreground">
                        {row.email}
                      </Text>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex rounded-full px-2 py-0.5 text-xs font-semibold bg-muted text-foreground">
                    {row.role}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={cn(
                      "inline-flex rounded-full px-2 py-0.5 text-xs font-semibold",
                      statusStyles[row.status]
                    )}
                  >
                    {row.status === "invited" ? "Invited" : row.status === "suspended" ? "Suspended" : "Active"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Text variant="caption" as="span" className="text-muted-foreground">
                    {row.lastActive}
                  </Text>
                </td>
                <td className="px-4 py-3">
                  <Text variant="caption" as="span" className="text-muted-foreground">
                    {row.joined}
                  </Text>
                </td>
                <td className="px-4 py-3">
                  {row.status === "active" && onManage && (
                    <button
                      type="button"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground"
                      onClick={() => onManage(row.id)}
                    >
                      Manage
                    </button>
                  )}
                  {row.status === "invited" && (
                    <span className="flex items-center gap-2 text-sm">
                      {onResend && (
                        <button
                          type="button"
                          className="font-medium text-muted-foreground hover:text-foreground"
                          onClick={() => onResend(row.id)}
                        >
                          Resend
                        </button>
                      )}
                      <span className="text-border">·</span>
                      {onRevoke && (
                        <button
                          type="button"
                          className="font-medium text-destructive hover:brightness-110"
                          onClick={() => onRevoke(row.id)}
                        >
                          Revoke
                        </button>
                      )}
                    </span>
                  )}
                  {row.status === "suspended" && onReactivate && (
                    <button
                      type="button"
                      className="text-sm font-medium text-primary hover:brightness-110"
                      onClick={() => onReactivate(row.id)}
                    >
                      Reactivate
                    </button>
                  )}
                  {row.status === "active" && !onManage && (
                    <Text variant="caption" as="span" className="text-muted-foreground">—</Text>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
