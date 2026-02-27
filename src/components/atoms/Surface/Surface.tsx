import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { SurfaceProps } from "./Surface.types";

const surfaceVariants = cva(
  "rounded-lg bg-card text-card-foreground border border-border",
  {
    variants: {
      elevation: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
      },
    },
    defaultVariants: {
      elevation: "none",
    },
  }
);

export { surfaceVariants };

export function Surface({
  elevation = "none",
  className,
  ...rest
}: SurfaceProps) {
  return (
    <div
      className={cn(surfaceVariants({ elevation }), className)}
      {...rest}
    />
  );
}
