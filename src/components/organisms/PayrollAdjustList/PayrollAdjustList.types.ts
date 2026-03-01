export interface PayrollAdjustListItem {
  id: string;
  employeeId: string;
  employeeName: string;
  type: "earnings" | "deduction";
  description: string;
  amount: number;
  addedBy: string;
}

export interface PayrollAdjustListProps {
  items: PayrollAdjustListItem[];
  netEffect: number;
  onAddAdjustment?: () => void;
  onEdit?: (id: string) => void;
  onRemove?: (id: string) => void;
  className?: string;
}
