import type { PayrollRunStatus } from "@/data/mocks/mockPayroll";

export interface PayrollTableRun {
  id: string;
  periodLabel: string;
  periodSubLabel: string;
  dateRange: string;
  employeeCount: number;
  grossPay: number | null;
  netPay: number | null;
  status: PayrollRunStatus;
}

export interface PayrollTableProps {
  runs: PayrollTableRun[];
  onRunClick?: (id: string) => void;
  onComputeClick?: (id: string) => void;
  onMarkPaidClick?: (id: string) => void;
  onViewClick?: (id: string) => void;
  className?: string;
}
