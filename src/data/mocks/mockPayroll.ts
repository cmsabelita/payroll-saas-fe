/**
 * Mock payroll data for dashboard payroll list and detail pages.
 * No API; for UI development only.
 */

export type PayrollRunStatus =
  | "draft"
  | "processing"
  | "computed"
  | "approved"
  | "paid";

export interface PayrollRun {
  id: string;
  periodLabel: string;
  periodSubLabel: string;
  dateRange: string;
  employeeCount: number;
  grossPay: number | null;
  netPay: number | null;
  status: PayrollRunStatus;
}

export interface PayrollSummaryKpi {
  value: string;
  label: string;
  badge?: string;
}

export const MOCK_PAYROLL_SUMMARY: PayrollSummaryKpi[] = [
  { value: "₱8.42M", label: "YTD Gross Payroll", badge: "Jan–Feb 2026" },
  { value: "₱7.11M", label: "YTD Net Payroll", badge: "After deductions" },
  { value: "4", label: "Periods This Year", badge: "3 paid · 1 draft" },
  { value: "₱27.8K", label: "Avg. Per Employee", badge: "Net pay / period" },
];

export const MOCK_PAYROLL_RUNS: PayrollRun[] = [
  {
    id: "pr-1",
    periodLabel: "Feb 2026 · 2nd Half",
    periodSubLabel: "Semi-monthly",
    dateRange: "Feb 16 – Feb 28, 2026",
    employeeCount: 128,
    grossPay: null,
    netPay: null,
    status: "draft",
  },
  {
    id: "pr-2",
    periodLabel: "Feb 2026 · 1st Half",
    periodSubLabel: "Semi-monthly",
    dateRange: "Feb 1 – Feb 15, 2026",
    employeeCount: 128,
    grossPay: 2_142_500,
    netPay: 1_826_730,
    status: "approved",
  },
  {
    id: "pr-3",
    periodLabel: "Jan 2026 · 2nd Half",
    periodSubLabel: "Semi-monthly",
    dateRange: "Jan 16 – Jan 31, 2026",
    employeeCount: 126,
    grossPay: 2_086_400,
    netPay: 1_779_220,
    status: "paid",
  },
  {
    id: "pr-4",
    periodLabel: "Jan 2026 · 1st Half",
    periodSubLabel: "Semi-monthly",
    dateRange: "Jan 1 – Jan 15, 2026",
    employeeCount: 126,
    grossPay: 2_052_100,
    netPay: 1_748_950,
    status: "paid",
  },
];

export function getMockPayrollRunById(id: string): PayrollRun | undefined {
  return MOCK_PAYROLL_RUNS.find((r) => r.id === id);
}

export type PayrollDetailStep = "draft" | "processing" | "computed" | "approved" | "paid";

export interface PayrollDetailData {
  id: string;
  periodLabel: string;
  status: PayrollRunStatus;
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
  actionTitle?: string;
  actionDescription?: string;
  alerts?: { variant: "warning" | "info"; message: string }[];
}

const MOCK_PAYROLL_DETAIL: PayrollDetailData = {
  id: "pr-2",
  periodLabel: "Feb 2026 · 1st Half",
  status: "computed",
  currentStep: "computed",
  stepCaption: "Computed on Feb 28, 2026 at 10:14 AM by Mark Santos · Pay date: Mar 5, 2026",
  totalGrossPay: 2_184_600,
  totalDeductions: 324_210,
  totalNetPay: 1_860_390,
  withholdingTax: 201_830,
  employeeCount: 128,
  deductionsBadge: "SSS · PH · HDMF · WHT",
  netPayBadge: "Awaiting disbursement",
  withholdingBadge: "For BIR 1601-C",
  actionTitle: "Ready for approval",
  actionDescription: "Review the computed payroll below, then approve to proceed to disbursement.",
  alerts: [
    { variant: "warning", message: "3 employees have pending attendance correction requests that may affect this period. Review before approving." },
    { variant: "info", message: "2 salary adjustments were applied this period (Maria Santos +₱5,000; Jose Reyes +₱3,000)." },
  ],
};

export function getMockPayrollDetail(id: string): PayrollDetailData | undefined {
  const run = getMockPayrollRunById(id);
  if (!run) return undefined;
  const status = run.status;
  const currentStep: PayrollDetailStep = status;
  return {
    ...MOCK_PAYROLL_DETAIL,
    id: run.id,
    periodLabel: run.periodLabel,
    status,
    currentStep,
    totalGrossPay: run.grossPay ?? MOCK_PAYROLL_DETAIL.totalGrossPay,
    totalNetPay: run.netPay ?? MOCK_PAYROLL_DETAIL.totalNetPay,
  };
}

export interface PayrollEmployeeRow {
  id: string;
  employeeId: string;
  name: string;
  position: string;
  grossPay: number;
  deductions: number;
  netPay: number;
  status: "ok" | "adj" | "pending";
}

export const MOCK_PAYROLL_EMPLOYEES: PayrollEmployeeRow[] = [
  { id: "e1", employeeId: "EMP-0023", name: "Ana Reyes", position: "HR Manager", grossPay: 38_500, deductions: 5_240, netPay: 33_260, status: "ok" },
  { id: "e2", employeeId: "EMP-0041", name: "Jose Reyes", position: "Software Engineer", grossPay: 28_000, deductions: 3_820, netPay: 24_180, status: "ok" },
  { id: "e3", employeeId: "EMP-0012", name: "Maria Santos", position: "Accountant", grossPay: 32_000, deductions: 4_380, netPay: 27_620, status: "adj" },
  { id: "e4", employeeId: "EMP-0008", name: "Carlos Dela Cruz", position: "Sales Executive", grossPay: 22_000, deductions: 2_980, netPay: 19_020, status: "ok" },
];

export interface PayrollPayslipRow {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  sent: boolean;
}

export const MOCK_PAYROLL_PAYSLIPS: PayrollPayslipRow[] = [
  { id: "ps1", employeeId: "EMP-0023", name: "Ana Reyes", email: "ana.reyes@example.com", sent: false },
  { id: "ps2", employeeId: "EMP-0041", name: "Jose Reyes", email: "jose.reyes@example.com", sent: false },
  { id: "ps3", employeeId: "EMP-0012", name: "Maria Santos", email: "maria.santos@example.com", sent: true },
];

export interface PayrollAdjustmentRow {
  id: string;
  employeeId: string;
  employeeName: string;
  type: "earnings" | "deduction";
  description: string;
  amount: number;
  addedBy: string;
}

export const MOCK_PAYROLL_ADJUSTMENTS: PayrollAdjustmentRow[] = [
  { id: "adj1", employeeId: "EMP-0041", employeeName: "Jose Cruz", type: "deduction", description: "Late — April 5 (2 hrs)", amount: -708.33, addedBy: "Ana Reyes" },
  { id: "adj2", employeeId: "EMP-0023", employeeName: "Ana Reyes", type: "earnings", description: "Project completion bonus", amount: 10_000, addedBy: "Mark Santos" },
  { id: "adj3", employeeId: "EMP-0004", employeeName: "Teresa Flores", type: "deduction", description: "SSS salary loan deduction", amount: -500, addedBy: "Ana Reyes" },
];

export interface PayrollBreakdownEarning {
  label: string;
  amount: number;
}

export interface PayrollBreakdownDeduction {
  label: string;
  amount: number;
}

export interface PayrollEmployeeBreakdownData {
  employeeId: string;
  name: string;
  position: string;
  department: string;
  payPeriod: string;
  payDate: string;
  grossPay: number;
  totalDeductions: number;
  netPay: number;
  earnings: PayrollBreakdownEarning[];
  deductions: PayrollBreakdownDeduction[];
}

export const MOCK_PAYROLL_BREAKDOWN: PayrollEmployeeBreakdownData = {
  employeeId: "EMP-0023",
  name: "Ana Reyes",
  position: "HR Manager",
  department: "Human Resources",
  payPeriod: "April 1–30, 2024",
  payDate: "April 30, 2024",
  grossPay: 88_424.72,
  totalDeductions: 12_340.5,
  netPay: 76_084.22,
  earnings: [
    { label: "Basic Salary", amount: 75_000 },
    { label: "Rice Allowance", amount: 2_000 },
    { label: "Transportation", amount: 3_000 },
    { label: "Overtime Pay (8 hrs)", amount: 3_515.63 },
    { label: "Holiday Pay (1 day)", amount: 3_409.09 },
  ],
  deductions: [
    { label: "SSS", amount: 2_400 },
    { label: "PhilHealth", amount: 1_500 },
    { label: "HDMF", amount: 1_000 },
    { label: "Withholding Tax", amount: 7_440.5 },
  ],
};

export function getMockPayrollBreakdown(
  _payrollId: string,
  employeeId: string
): PayrollEmployeeBreakdownData | undefined {
  if (employeeId === "EMP-0023" || employeeId === "e1") {
    return { ...MOCK_PAYROLL_BREAKDOWN, employeeId };
  }
  return {
    ...MOCK_PAYROLL_BREAKDOWN,
    employeeId,
    name: "Employee",
    position: "Staff",
    department: "General",
    grossPay: 50_000,
    totalDeductions: 6_000,
    netPay: 44_000,
    earnings: [{ label: "Basic Salary", amount: 50_000 }],
    deductions: [
      { label: "SSS", amount: 2_000 },
      { label: "PhilHealth", amount: 1_500 },
      { label: "Withholding Tax", amount: 2_500 },
    ],
  };
}
