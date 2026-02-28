import type { ReactNode } from "react";

export interface PayrollStatusTableProps {
  /** Tabs above table (e.g. TabFilter) */
  tabFilter?: ReactNode;
  /** Table content (rows with PayrollStatusRow) */
  children: ReactNode;
  /** Pagination */
  pagination?: ReactNode;
  className?: string;
}
