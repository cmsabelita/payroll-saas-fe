export type PayrollEmployeeRowStatus = "ok" | "adj" | "pending";

export interface PayrollEmployeesTableRow {
  id: string;
  employeeId: string;
  name: string;
  position: string;
  grossPay: number;
  deductions: number;
  netPay: number;
  status: PayrollEmployeeRowStatus;
}

export interface PayrollEmployeesTableProps {
  rows: PayrollEmployeesTableRow[];
  onViewBreakdown?: (employeeId: string) => void;
  className?: string;
}
