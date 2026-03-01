"use client";

import { AppSidebar, AppTopbar } from "@/components/organisms";
import { cn } from "@/utils";
import type { DashboardTemplateProps } from "./DashboardTemplate.types";

export function DashboardTemplate({
  logo,
  navSections,
  user,
  topbarTitle,
  topbarSubtitle,
  topbarPrimaryAction,
  topbarDateRange,
  topbarTrailing,
  children,
  className,
}: DashboardTemplateProps) {
  return (
    <div
      className={cn(
        "flex h-screen overflow-hidden bg-muted/30",
        className
      )}
    >
      <AppSidebar
        logo={logo}
        navSections={navSections}
        user={user}
      />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <AppTopbar
          title={topbarTitle}
          subtitle={topbarSubtitle}
          primaryAction={topbarPrimaryAction}
          dateRangeTrigger={topbarDateRange}
          trailing={topbarTrailing}
        />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
