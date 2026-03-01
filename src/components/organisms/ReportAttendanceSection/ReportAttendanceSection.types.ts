export interface ReportAttendanceSectionProps {
  periodOptions: { value: string; label: string }[];
  departmentOptions: { value: string; label: string }[];
  selectedPeriod: string;
  selectedDepartment: string;
  onPeriodChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onExportExcel?: () => void;
  avgDaysPresent: string;
  lateArrivals: string;
  absentDays: string;
  overtimeHours: string;
  periodLabel?: string;
  departmentRows: { department: string; employees: number; avgDaysPresent: string; lateCount: number; absentDays: number; otHours: number; rate: string }[];
  lateRows: { employee: string; department: string; lateCount: number; period: string }[];
  className?: string;
}
