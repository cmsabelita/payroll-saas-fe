export interface EmployeeSeparationFormValues {
  separationType: string;
  lastDay: string;
  dateNoticeReceived: string;
  clearanceStatus: string;
  notes: string;
  noticeReceived: boolean;
  exitInterviewCompleted: boolean;
  clearanceFormSigned: boolean;
}

export interface EmployeeSeparationFormProps {
  displayName: string;
  employeeId: string;
  defaultValues?: Partial<EmployeeSeparationFormValues>;
  onSubmit: (data: EmployeeSeparationFormValues) => void;
  onCancel?: () => void;
  className?: string;
}
