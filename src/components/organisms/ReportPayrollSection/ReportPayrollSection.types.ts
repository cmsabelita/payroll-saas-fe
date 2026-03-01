export interface ReportPayrollSectionProps {
  yearOptions: { value: string; label: string }[];
  monthOptions: { value: string; label: string }[];
  departmentOptions: { value: string; label: string }[];
  selectedYear: string;
  selectedMonth: string;
  selectedDepartment: string;
  onYearChange: (value: string) => void;
  onMonthChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onExportExcel?: () => void;
  onExportPdf?: () => void;
  totalPayrollYtd: string;
  avgMonthly: string;
  totalEmployees: string;
  taxWithheldYtd: string;
  periodLabel?: string;
  /** Monthly data for bar chart: label + value (e.g. "Jan", 4.1) */
  monthlyData?: { label: string; value: number; formatted: string }[];
  className?: string;
}
