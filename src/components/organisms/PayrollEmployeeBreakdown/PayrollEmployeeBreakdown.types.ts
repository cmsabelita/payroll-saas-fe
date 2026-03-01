export interface PayrollEmployeeBreakdownEarning {
  label: string;
  amount: number;
}

export interface PayrollEmployeeBreakdownDeduction {
  label: string;
  amount: number;
}

export interface PayrollEmployeeBreakdownProps {
  employeeId: string;
  name: string;
  position: string;
  department: string;
  payPeriod: string;
  payDate: string;
  grossPay: number;
  totalDeductions: number;
  netPay: number;
  earnings: PayrollEmployeeBreakdownEarning[];
  deductions: PayrollEmployeeBreakdownDeduction[];
  onDownloadPdf?: () => void;
  className?: string;
}
