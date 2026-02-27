import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { SkeletonProps } from "./Skeleton.types";

const skeletonVariants = cva("animate-pulse bg-muted", {
  variants: {
    variant: {
      default: "rounded-md",
      text: "rounded h-4",
      circular: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export { skeletonVariants };

export function Skeleton({
  variant = "default",
  className,
  ...rest
}: SkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(skeletonVariants({ variant }), className)}
      {...rest}
    />
  );
}
