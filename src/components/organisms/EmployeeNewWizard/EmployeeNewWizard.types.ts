/** Aggregate form values for all 7 wizard steps (mock / submit payload) */
export interface EmployeeNewWizardFormValues {
  // Step 1: Personal
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  gender: string;
  civilStatus: string;
  nationality: string;
  placeOfBirth: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  province: string;
  zipCode: string;
  personalEmail: string;
  mobileNumber: string;
  emergencyContactName: string;
  emergencyRelationship: string;
  emergencyContactNumber: string;
  // Step 2: Employment
  employeeId: string;
  department: string;
  position: string;
  employmentType: string;
  dateHired: string;
  workLocation: string;
  shiftSchedule: string;
  // Step 3: Gov IDs
  sssNumber: string;
  philHealthNumber: string;
  pagIbigNumber: string;
  tin: string;
  // Step 4: Salary
  basicSalary: string;
  payFrequency: string;
  // Step 5: Tax (tin above; optional additional)
  taxExemption: string;
  // Step 6: Access
  sendInvite: boolean;
  role: string;
  // Step 7: Review (read-only summary)
}

export const EMPLOYEE_NEW_WIZARD_STEP_LABELS = [
  "Personal Info",
  "Employment",
  "Gov't IDs",
  "Salary",
  "Tax Info",
  "App Access",
  "Review",
] as const;

export type EmployeeNewWizardStepIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface EmployeeNewWizardProps {
  /** Called when user submits the final step with aggregate form data */
  onSubmit: (data: EmployeeNewWizardFormValues) => void;
  /** Called when user cancels (e.g. link back to list) */
  onCancel?: () => void;
  /** Initial step (0-based). Default 0. */
  initialStep?: EmployeeNewWizardStepIndex;
  className?: string;
}
