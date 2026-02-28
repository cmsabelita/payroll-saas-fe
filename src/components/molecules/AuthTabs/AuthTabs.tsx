import { TabSegment } from "@/components/atoms";
import { cn } from "@/utils";
import type { AuthTabsProps } from "./AuthTabs.types";

export function AuthTabs({
  tabs,
  value,
  onChange,
  appearance = "default",
  className,
}: AuthTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Auth"
      className={cn(
        "flex w-full bg-muted p-1",
        appearance === "card" ? "rounded-xl" : "rounded-lg",
        className
      )}
    >
      {tabs.map((tab) => (
        <div key={tab.key} className="min-w-0 flex-1">
          <TabSegment
            active={value === tab.key}
            appearance={appearance}
            onClick={() => onChange(tab.key)}
            type="button"
            className="w-full"
          >
            {tab.label}
          </TabSegment>
        </div>
      ))}
    </div>
  );
}
