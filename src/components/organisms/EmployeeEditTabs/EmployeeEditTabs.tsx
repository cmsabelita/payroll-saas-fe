"use client";

import { TabSegment } from "@/components/atoms";
import { cn } from "@/utils";
import type { EmployeeEditTabsProps } from "./EmployeeEditTabs.types";

export function EmployeeEditTabs({
  tabs,
  activeTab,
  onTabChange,
  className,
}: EmployeeEditTabsProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex flex-wrap gap-1 rounded-xl bg-muted p-1",
        className
      )}
    >
      {tabs.map((tab) => (
        <TabSegment
          key={tab.key}
          active={activeTab === tab.key}
          appearance="card"
          onClick={() => onTabChange(tab.key)}
          type="button"
        >
          {tab.label}
        </TabSegment>
      ))}
    </div>
  );
}
