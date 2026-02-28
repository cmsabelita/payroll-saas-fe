import type { ReactNode } from "react";

/** Avatar + primary line + secondary line (e.g. name + ID). Used as a single cell in employee tables. */
export interface EmployeeRowCellProps {
  avatar: ReactNode;
  primaryLine: string;
  secondaryLine?: string;
  className?: string;
}
