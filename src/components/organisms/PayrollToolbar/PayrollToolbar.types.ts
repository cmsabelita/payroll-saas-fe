export interface PayrollToolbarTab {
  key: string;
  label: string;
  count?: number | string;
}

export interface PayrollToolbarProps {
  /** Current status tab value */
  statusTab: string;
  /** Status tab change handler */
  onStatusTabChange: (key: string) => void;
  /** Tabs: All, Draft, Processing, Computed, Approved, Paid */
  tabs: PayrollToolbarTab[];
  /** Year filter label (e.g. "2026") */
  yearLabel?: string;
  /** Year filter click (optional) */
  onYearFilterClick?: () => void;
  /** New period / Run payroll CTA click */
  onNewPeriodClick: () => void;
  className?: string;
}
