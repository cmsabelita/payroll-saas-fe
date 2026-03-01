export interface EmployeeSalarySummary {
  monthlyBasic: string;
  dailyRate: string;
  hourlyRate: string;
  effectiveSince: string;
}

export interface EmployeeSalaryHistoryRow {
  effectiveDate: string;
  monthlyBasic: string;
  change?: string;
  changePercent?: string;
  reason?: string;
  updatedBy: string;
}

export interface EmployeeAllowanceRow {
  type: string;
  amount: string;
  frequency: string;
  taxable: string;
  since: string;
}

export interface EmployeeSalaryViewProps {
  summary: EmployeeSalarySummary;
  history: EmployeeSalaryHistoryRow[];
  allowances: EmployeeAllowanceRow[];
  onRecordSalaryChange?: () => void;
  onAddAllowance?: () => void;
  onEditAllowance?: (index: number) => void;
  className?: string;
}
