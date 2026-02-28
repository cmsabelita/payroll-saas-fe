import { TabSegment } from "@/components/atoms";
import { cn } from "@/utils";
import type { AuthTabsProps } from "./AuthTabs.types";

export function AuthTabs({ tabs, value, onChange, className }: AuthTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Auth"
      className={cn("inline-flex rounded-lg bg-muted p-1", className)}
    >
      {tabs.map((tab) => (
        <TabSegment
          key={tab.key}
          active={value === tab.key}
          onClick={() => onChange(tab.key)}
          type="button"
        >
          {tab.label}
        </TabSegment>
      ))}
    </div>
  );
}
