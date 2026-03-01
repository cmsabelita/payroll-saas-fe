import type { ReactNode } from "react";

export type AlertDeadlineVariant = "error" | "warning" | "info" | "success";

export interface AlertDeadlineItem {
  variant: AlertDeadlineVariant;
  icon?: ReactNode;
  title: string;
  description?: string;
}

export interface AlertsDeadlinesProps {
  items: AlertDeadlineItem[];
  className?: string;
}
