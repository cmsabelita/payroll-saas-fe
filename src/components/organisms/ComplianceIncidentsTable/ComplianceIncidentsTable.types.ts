export interface ComplianceIncidentsTableRow {
  id: string;
  ref: string;
  employeeName: string;
  date: string;
  type: string;
  status: string;
}

export interface ComplianceIncidentsTableProps {
  rows: ComplianceIncidentsTableRow[];
  onView?: (id: string) => void;
  className?: string;
}
