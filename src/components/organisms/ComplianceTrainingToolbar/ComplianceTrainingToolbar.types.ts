export interface ComplianceTrainingToolbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  typeFilter: string;
  onTypeFilterChange: (value: string) => void;
  typeOptions: { value: string; label: string }[];
  onAddTrainingClick: () => void;
  className?: string;
}
