export interface ReportHeadcountSectionRow {
  department: string;
  headcount: number;
  newHires: number;
  separations: number;
  turnoverRate: string;
}

export interface ReportHeadcountSectionProps {
  periodOptions: { value: string; label: string }[];
  selectedPeriod: string;
  onPeriodChange: (value: string) => void;
  onExportExcel?: () => void;
  totalHeadcount: string;
  newHires: string;
  separations: string;
  turnoverRate: string;
  rows: ReportHeadcountSectionRow[];
  className?: string;
}
