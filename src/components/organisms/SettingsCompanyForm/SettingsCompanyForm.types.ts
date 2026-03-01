export interface SettingsCompanyFormValues {
  companyName: string;
  legalName: string;
  industry: string;
  companySize: string;
  tin: string;
  secDtiRegistration: string;
  yearFounded: string;
  employmentType: string;
  primaryEmail: string;
  phone: string;
  website: string;
  businessAddress: string;
  sssEmployer: string;
  philhealthEmployer: string;
  pagibigEmployer: string;
  birRdoCode: string;
}

export interface SettingsCompanyFormProps {
  initialValues?: Partial<SettingsCompanyFormValues>;
  onSubmit: (values: SettingsCompanyFormValues) => void;
  isSubmitting?: boolean;
  className?: string;
}
