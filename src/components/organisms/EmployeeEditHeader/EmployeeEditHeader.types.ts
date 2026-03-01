import type { ReactNode } from "react";

export interface EmployeeEditHeaderProps {
  /** Display name (e.g. "Ana Reyes") */
  displayName: string;
  /** Subtitle line (e.g. "EMP-00042 · HR Manager") */
  subtitle?: string;
  /** Avatar node (e.g. <Avatar fallback="AR" />) */
  avatar: ReactNode;
  /** Called when "Change Photo" is clicked */
  onChangePhoto?: () => void;
  /** Optional back link (e.g. breadcrumb or link to list) */
  backLink?: ReactNode;
  className?: string;
}
