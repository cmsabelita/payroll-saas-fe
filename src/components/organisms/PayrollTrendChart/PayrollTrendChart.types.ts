export interface PayrollTrendChartMonth {
  label: string;
  /** 0–100, height % of bar area */
  grossPct: number;
  /** 0–100 */
  netPct: number;
  /** Highlights this bar with glow + label */
  current?: boolean;
  /** e.g. "₱4.28M" shown above current bar */
  currentLabel?: string;
}

export interface PayrollTrendChartProps {
  title?: string;
  subtitle?: string;
  months: PayrollTrendChartMonth[];
  className?: string;
}
