import { Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { UnderlineTabsProps } from "./UnderlineTabs.types";

export function UnderlineTabs({
  tabs,
  value,
  onChange,
  className,
}: UnderlineTabsProps) {
  return (
    <div
      role="tablist"
      className={cn("flex gap-6 border-b border-border", className)}
    >
      {tabs.map((tab) => {
        const active = value === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.key)}
            className={cn(
              "pb-2 -mb-px text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              active
                ? "text-foreground border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
            )}
          >
            <Text variant="label" as="span">
              {tab.label}
            </Text>
          </button>
        );
      })}
    </div>
  );
}
