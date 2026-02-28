import type { ReactNode } from "react";

export interface DateRangeTriggerProps {
  label: string;
  /** Calendar icon (optional; default calendar icon used if not provided) */
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}
