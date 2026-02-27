import type { HTMLAttributes } from "react";

export type SkeletonVariant = "default" | "text" | "circular";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
}
