import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { BadgeProps } from "./Badge.types";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground",
        success:
          "bg-success text-success-foreground",
        warning:
          "bg-warning text-warning-foreground",
        destructive:
          "bg-destructive text-destructive-foreground",
        outline:
          "border border-border bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export { badgeVariants };

export function Badge({
  variant = "default",
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "px-2 py-0.5 text-xs whitespace-nowrap",
        badgeVariants({ variant }),
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
