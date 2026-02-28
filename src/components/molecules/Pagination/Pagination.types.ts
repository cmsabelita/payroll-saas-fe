export interface PaginationProps {
  /** 1-based start index of current page (e.g. 11 for "11–20") */
  start: number;
  /** 1-based end index of current page (e.g. 20) */
  end: number;
  /** Total number of items */
  total: number;
  /** Current 1-based page */
  page: number;
  /** Total number of pages */
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onPage?: (page: number) => void;
  /** Whether prev is disabled */
  hasPrev?: boolean;
  /** Whether next is disabled */
  hasNext?: boolean;
  className?: string;
}
