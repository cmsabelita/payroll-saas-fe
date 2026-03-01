export interface ComplianceRemittancesTableRow {
  id: string;
  agency: string;
  period: string;
  amount: string;
  status: string;
  dueDate: string;
}

export interface ComplianceRemittancesTableProps {
  rows: ComplianceRemittancesTableRow[];
  onView?: (id: string) => void;
  className?: string;
}
