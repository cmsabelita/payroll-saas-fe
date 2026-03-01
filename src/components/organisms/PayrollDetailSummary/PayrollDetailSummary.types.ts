import type { PayrollDetailStep } from "@/data/mocks/mockPayroll";

export interface PayrollDetailSummaryProps {
  currentStep: PayrollDetailStep;
  stepCaption?: string;
  totalGrossPay: number;
  totalDeductions: number;
  totalNetPay: number;
  withholdingTax: number;
  employeeCount: number;
  deductionsBadge?: string;
  netPayBadge?: string;
  withholdingBadge?: string;
  className?: string;
}
