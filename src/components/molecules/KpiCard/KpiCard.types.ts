import type { ReactNode } from "react";

export interface KpiCardProps {
  /** Icon or trend indicator */
  icon?: ReactNode;
  /** Optional badge/trend (e.g. "+12%") */
  badge?: ReactNode;
  value: string | number;
  label: string;
  className?: string;
}
