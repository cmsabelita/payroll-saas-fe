"use client";

import { Button, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { EmployeeProfileHeaderProps } from "./EmployeeProfileHeader.types";

export function EmployeeProfileHeader({
  displayName,
  avatar,
  statusBadges,
  subtitle,
  reportsTo,
  stats,
  onProcessSeparation,
  className,
}: EmployeeProfileHeaderProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-5",
        className
      )}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 flex-1 gap-5">
          <div className="shrink-0">{avatar}</div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex flex-wrap items-center gap-3">
              <Text as="h1" variant="body" className="text-xl font-bold text-foreground">
                {displayName}
              </Text>
              {statusBadges}
            </div>
            <Text variant="caption" as="p" className="mb-2 text-muted-foreground">
              {subtitle}
            </Text>
            {reportsTo != null && (
              <Text variant="caption" as="p" className="mb-3 text-muted-foreground">
                {reportsTo}
              </Text>
            )}
            {stats != null && stats.length > 0 && (
              <div className="flex flex-wrap items-center gap-5">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground"
                  >
                    <span className="font-medium text-foreground">{stat.value}</span>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {onProcessSeparation != null && (
          <div className="flex shrink-0 items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-destructive/50 text-destructive hover:bg-destructive/10"
              onClick={onProcessSeparation}
            >
              Process Separation
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
