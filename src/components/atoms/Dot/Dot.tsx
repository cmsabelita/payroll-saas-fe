import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { DotProps } from "./Dot.types";

const dotVariants = cva("inline-block rounded-full shrink-0", {
  variants: {
    variant: {
      default: "bg-foreground",
      success: "bg-success",
      warning: "bg-warning",
      destructive: "bg-destructive",
      muted: "bg-muted-foreground",
    },
    size: {
      xs: "size-1.5",
      sm: "size-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
  },
});

export { dotVariants };

export function Dot({
  variant = "default",
  size = "sm",
  className,
  ...rest
}: DotProps) {
  return (
    <span
      role="presentation"
      className={cn(dotVariants({ variant, size }), className)}
      {...rest}
    />
  );
}
