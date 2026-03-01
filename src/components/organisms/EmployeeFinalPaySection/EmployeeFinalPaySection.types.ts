export interface EmployeeFinalPayBreakdownRow {
  description: string;
  amount: string;
  notes?: string;
}

export interface EmployeeFinalPayClearanceItem {
  label: string;
  status: "cleared" | "pending";
}

export interface EmployeeFinalPaySectionProps {
  displayName: string;
  employeeId: string;
  lastDay: string;
  separationType: string;
  clearanceStatus?: string;
  earnings: EmployeeFinalPayBreakdownRow[];
  earningsSubtotal: string;
  deductions: EmployeeFinalPayBreakdownRow[];
  deductionsSubtotal: string;
  netFinalPay: string;
  clearanceChecklist: EmployeeFinalPayClearanceItem[];
  step?: "draft" | "computed" | "released";
  onBackToDraft?: () => void;
  onRelease?: () => void;
  onEdit?: () => void;
  className?: string;
}
