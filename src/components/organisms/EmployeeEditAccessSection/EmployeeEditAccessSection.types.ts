export interface EmployeeEditAccessFormValues {
  portalEnabled: boolean;
  loginEmail: string;
  adminRole: string;
}

export interface EmployeeEditAccessSectionProps {
  defaultValues?: Partial<EmployeeEditAccessFormValues>;
  lastLogin?: string;
  onSubmit: (data: EmployeeEditAccessFormValues) => void;
  onResetPassword?: () => void;
  onResendWelcomeEmail?: () => void;
  onRevokeAccess?: () => void;
  className?: string;
}
