export interface EmployeeEditSalaryFormValues {
  basicSalaryRate: string;
  payFrequency: string;
  dailyRate: string;
  mealAllowanceEnabled: boolean;
  mealAllowanceAmount: string;
  riceSubsidyEnabled: boolean;
  riceSubsidyAmount: string;
  transportationEnabled: boolean;
  transportationAmount: string;
  payMode: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
}

export interface EmployeeEditSalarySectionProps {
  defaultValues?: Partial<EmployeeEditSalaryFormValues>;
  currentSalaryDisplay?: string;
  onSubmit: (data: EmployeeEditSalaryFormValues) => void;
  className?: string;
}
