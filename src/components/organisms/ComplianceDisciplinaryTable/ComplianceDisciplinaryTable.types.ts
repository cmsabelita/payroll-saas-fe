export interface ComplianceDisciplinaryTableRow {
  id: string;
  caseNumber: string;
  employeeName: string;
  employeeDept: string;
  offense: string;
  nteIssued: string;
  hearing: string;
  decision: string;
  status: "open" | "pending_hearing" | "closed" | "sealed";
  sealed?: boolean;
}

export interface ComplianceDisciplinaryTableProps {
  rows: ComplianceDisciplinaryTableRow[];
  onView?: (id: string) => void;
  className?: string;
}
