import type { ReactNode } from "react";

export interface ApprovalsTableProps {
  /** KPI strip above table (e.g. DashboardKpiStrip) */
  kpiStrip?: ReactNode;
  /** Tabs (e.g. TabFilter) */
  tabFilter?: ReactNode;
  /** Toolbar (search, status filter) */
  toolbar?: ReactNode;
  /** Table content (PendingApprovalRow rows) */
  children: ReactNode;
  /** Bulk action bar when selection exists (e.g. BulkActionBar) */
  bulkActionBar?: ReactNode;
  /** Pagination */
  pagination?: ReactNode;
  className?: string;
}
