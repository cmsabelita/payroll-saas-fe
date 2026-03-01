import type { PayrollRunStatus } from "@/data/mocks/mockPayroll";

export interface PayrollDetailHeaderProps {
  periodLabel: string;
  status: PayrollRunStatus;
  className?: string;
}
