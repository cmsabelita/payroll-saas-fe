"use client";

import { buttonVariants, Surface, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type {
  PortalLeaveBalanceItem,
  PortalLeaveBalancesProps,
} from "./PortalLeaveBalances.types";

const barVariants: Record<
  NonNullable<PortalLeaveBalanceItem["variant"]>,
  string
> = {
  primary: "bg-primary",
  info: "bg-info",
  secondary: "bg-muted-foreground",
};

export function PortalLeaveBalances({
  items,
  applyLeaveHref,
  className,
}: PortalLeaveBalancesProps) {
  return (
    <Surface
      elevation="none"
      className={cn(
        "flex flex-col rounded-xl border border-border p-5",
        className
      )}
      role="region"
      aria-label="Leave balances"
    >
      <Text variant="label" as="h3" className="mb-4 font-semibold">
        Leave Balances
      </Text>
      <div className="flex flex-1 flex-col gap-3">
        {items.map((item, i) => {
          const pct = item.total > 0 ? (item.used / item.total) * 100 : 0;
          const barVariant = item.variant ?? "primary";
          return (
            <div key={i}>
              <div className="mb-1 flex items-center justify-between">
                <Text variant="caption" as="span" className="font-medium">
                  {item.name}
                </Text>
                <Text variant="caption" as="span">
                  <span className="font-bold text-foreground">{item.used}</span>
                  <span className="ml-1 font-normal text-muted-foreground">
                    / {item.total} days
                  </span>
                </Text>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className={cn("h-1.5 rounded-full", barVariants[barVariant])}
                  style={{ width: `${Math.min(100, pct)}%` }}
                  role="progressbar"
                  aria-valuenow={item.used}
                  aria-valuemin={0}
                  aria-valuemax={item.total}
                  aria-label={`${item.name}: ${item.used} of ${item.total} days`}
                />
              </div>
            </div>
          );
        })}
      </div>
      {applyLeaveHref != null && (
        <a
          href={applyLeaveHref}
          className={cn(buttonVariants({ variant: "primary", size: "md" }), "mt-4 w-full py-2 text-center")}
        >
          Apply for Leave
        </a>
      )}
    </Surface>
  );
}
