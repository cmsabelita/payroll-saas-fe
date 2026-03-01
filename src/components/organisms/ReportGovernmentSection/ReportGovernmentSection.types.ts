export interface ReportGovernmentItem {
  id: string;
  name: string;
  description: string;
  period?: string;
}

export interface ReportGovernmentSectionProps {
  yearOptions: { value: string; label: string }[];
  selectedYear: string;
  onYearChange: (value: string) => void;
  items: ReportGovernmentItem[];
  onExport?: (id: string) => void;
  onGenerate?: (id: string) => void;
  className?: string;
}
