export interface PayrollPayslipsListItem {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  sent: boolean;
}

export interface PayrollPayslipsListProps {
  items: PayrollPayslipsListItem[];
  totalCount: number;
  sentCount: number;
  onDownload?: (id: string) => void;
  className?: string;
}
