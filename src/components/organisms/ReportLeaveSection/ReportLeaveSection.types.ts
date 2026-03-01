export interface ReportLeaveSectionRow {
  employee: string;
  department: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  days: number;
  status: string;
}

export interface ReportLeaveSectionProps {
  periodOptions: { value: string; label: string }[];
  departmentOptions: { value: string; label: string }[];
  selectedPeriod: string;
  selectedDepartment: string;
  onPeriodChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onExportExcel?: () => void;
  totalRequests: string;
  approved: string;
  pending: string;
  denied: string;
  rows: ReportLeaveSectionRow[];
  className?: string;
}
