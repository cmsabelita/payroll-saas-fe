export interface ComplianceTrainingTableRow {
  id: string;
  title: string;
  type: string;
  employeeName: string;
  department: string;
  completedDate: string;
  status: "completed" | "pending" | "overdue";
}

export interface ComplianceTrainingTableProps {
  rows: ComplianceTrainingTableRow[];
  onView?: (id: string) => void;
  className?: string;
}
