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
  },
  defaultVariants: {
    variant: "default",
  },
});

export { dotVariants };

export function Dot({ variant = "default", className, ...rest }: DotProps) {
  return (
    <span
      role="presentation"
      className={cn("size-2", dotVariants({ variant }), className)}
      {...rest}
    />
  );
}
