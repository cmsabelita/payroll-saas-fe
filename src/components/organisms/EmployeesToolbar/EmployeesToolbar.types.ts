export interface EmployeesToolbarProps {
  /** Controlled search value */
  searchValue?: string;
  /** Search input change handler */
  onSearchChange?: (value: string) => void;
  /** Search placeholder (e.g. "Search by name, ID, department…") */
  searchPlaceholder?: string;
  /** Filters button click (optional – button hidden when not provided) */
  onFiltersClick?: () => void;
  /** Department dropdown click (optional – button hidden when not provided) */
  onDepartmentClick?: () => void;
  /** Export button click (optional – button hidden when not provided) */
  onExportClick?: () => void;
  className?: string;
}
