export interface ComplianceRemittancesToolbarProps {
  periodOptions: { value: string; label: string }[];
  selectedPeriod: string;
  onPeriodChange: (value: string) => void;
  onAddClick?: () => void;
  className?: string;
}
