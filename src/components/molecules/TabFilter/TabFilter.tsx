import { TabSegment } from "@/components/atoms";
import { cn } from "@/utils";
import type { TabFilterProps } from "./TabFilter.types";

export function TabFilter({ tabs, value, onChange, className }: TabFilterProps) {
  return (
    <div
      role="tablist"
      className={cn("inline-flex flex-wrap gap-1", className)}
    >
      {tabs.map((tab) => (
        <TabSegment
          key={tab.key}
          active={value === tab.key}
          count={tab.count}
          onClick={() => onChange(tab.key)}
          type="button"
        >
          {tab.label}
        </TabSegment>
      ))}
    </div>
  );
}
