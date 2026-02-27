import type { HTMLAttributes } from "react";

export type ProgressVariant = "default" | "success" | "warning" | "destructive";

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?: ProgressVariant;
  /** When true, shows indeterminate (animated) progress */
  indeterminate?: boolean;
}
