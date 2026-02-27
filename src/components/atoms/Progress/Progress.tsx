import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { ProgressProps } from "./Progress.types";

const trackVariants = cva("overflow-hidden rounded-full bg-muted", {
  variants: {},
  defaultVariants: {},
});

const barVariants = cva("h-full rounded-full transition-transform duration-300 ease-out", {
  variants: {
    variant: {
      default: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      destructive: "bg-destructive",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export { trackVariants as progressVariants, barVariants };

export function Progress({
  value = 0,
  max = 100,
  variant = "default",
  indeterminate = false,
  className,
  ...rest
}: ProgressProps) {
  const percent = Math.min(100, Math.max(0, max > 0 ? (value / max) * 100 : 0));

  return (
    <div
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : value}
      aria-valuemin={0}
      aria-valuemax={indeterminate ? undefined : max}
      className={cn("h-2 w-full", trackVariants(), className)}
      {...rest}
    >
      {indeterminate ? (
        <div
          className={cn("h-full w-1/2 rounded-full bar-indeterminate", barVariants({ variant }))}
        />
      ) : (
        <div
          className={barVariants({ variant })}
          style={{ width: `${percent}%` }}
        />
      )}
    </div>
  );
}
