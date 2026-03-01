export interface EmployeeEditEmploymentFormValues {
  employeeId: string;
  dateHired: string;
  department: string;
  jobTitle: string;
  employmentType: string;
  employmentStatus: string;
  directSupervisor: string;
  workLocation: string;
  shiftSchedule: string;
  costCenter: string;
  separationType: string;
  lastDayOfWork: string;
}

export interface EmployeeEditEmploymentSectionProps {
  defaultValues?: Partial<EmployeeEditEmploymentFormValues>;
  onSubmit: (data: EmployeeEditEmploymentFormValues) => void;
  className?: string;
}
