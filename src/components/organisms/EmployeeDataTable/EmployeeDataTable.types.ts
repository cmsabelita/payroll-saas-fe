import type { ReactNode } from "react";

export interface EmployeeDataTableProps {
  /** Tabs above table (e.g. TabFilter) */
  tabFilter?: ReactNode;
  /** Toolbar row (search, filters, export button) */
  toolbar?: ReactNode;
  /** Table content (thead + tbody with EmployeeRowCell rows) */
  children: ReactNode;
  /** Pagination (e.g. Pagination component) */
  pagination?: ReactNode;
  /** Optional empty state when no rows */
  emptyState?: ReactNode;
  className?: string;
}
