export interface EmployeeEditTaxFormValues {
  mweExempt: boolean;
  taxStatus: string;
  qualifiedDependents: string;
  withholdingAgent: string;
  thirteenthMonthEligible: string;
}

export interface EmployeeEditTaxYtdSummary {
  grossIncome: string;
  taxWithheld: string;
  taxableIncome: string;
  year: number;
}

export interface EmployeeEditTaxSectionProps {
  defaultValues?: Partial<EmployeeEditTaxFormValues>;
  ytdSummary?: EmployeeEditTaxYtdSummary;
  onSubmit: (data: EmployeeEditTaxFormValues) => void;
  className?: string;
}
