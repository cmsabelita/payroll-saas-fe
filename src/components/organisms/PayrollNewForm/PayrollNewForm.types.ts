export interface PayrollNewFormValues {
  periodName: string;
  periodStart: string;
  periodEnd: string;
  payDate: string;
  includeEmployees: string;
  notes: string;
}

export interface PayrollNewFormProps {
  /** Last period summary (e.g. "Feb 2026 · 1st Half") */
  lastPeriodLabel?: string;
  /** Last period detail (e.g. "Feb 1–15, 2026 · Paid · Net ₱1,826,730") */
  lastPeriodDetail?: string;
  /** Payroll frequency label (read-only, e.g. "Semi-monthly (1st–15th / 16th–end of month)") */
  payrollFrequencyLabel?: string;
  /** Include-employees options */
  includeEmployeesOptions?: { value: string; label: string }[];
  /** Form submit handler */
  onSubmit: (values: PayrollNewFormValues) => void;
  /** Cancel handler */
  onCancel: () => void;
  /** Default form values */
  defaultValues?: Partial<PayrollNewFormValues>;
  className?: string;
}
