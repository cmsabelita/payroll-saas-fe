import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { TabSegmentProps } from "./TabSegment.types";

const tabSegmentVariants = cva(
  "inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
  {
    variants: {
      active: {
        true: "bg-primary text-primary-foreground shadow-sm",
        false: "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export { tabSegmentVariants };

export function TabSegment({
  active = false,
  count,
  className,
  children,
  ...rest
}: TabSegmentProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={cn(tabSegmentVariants({ active }), className)}
      {...rest}
    >
      {children}
      {count !== undefined && count !== null && (
        <span
          className={cn(
            "rounded-full px-1.5 py-0 text-xs tabular-nums",
            active ? "bg-primary-foreground/20" : "bg-muted text-muted-foreground"
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}
