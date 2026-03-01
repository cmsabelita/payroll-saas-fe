import type { ReactNode } from "react";

export interface EmployeeProfileHeaderProps {
  displayName: string;
  avatar: ReactNode;
  statusBadges: ReactNode;
  subtitle: string;
  reportsTo?: ReactNode;
  stats?: { label: string; value: string }[];
  onProcessSeparation?: () => void;
  className?: string;
}
