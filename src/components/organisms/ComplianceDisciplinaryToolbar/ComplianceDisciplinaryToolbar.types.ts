export interface ComplianceDisciplinaryToolbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusFilterChange: (value: string) => void;
  statusOptions: { value: string; label: string }[];
  onIssueNteClick: () => void;
  className?: string;
}
