export interface EmployeeEditGovIdsFormValues {
  sssNumber: string;
  sssContributionType: string;
  philHealthNumber: string;
  philHealthMembershipType: string;
  pagIbigMidNumber: string;
  pagIbigMonthlyContribution: string;
  tin: string;
  rdoCode: string;
  rdoName: string;
}

export type GovIdStatus = "verified" | "pending";

export interface EmployeeEditGovIdsSectionProps {
  defaultValues?: Partial<EmployeeEditGovIdsFormValues>;
  sssStatus?: GovIdStatus;
  philHealthStatus?: GovIdStatus;
  pagIbigStatus?: GovIdStatus;
  birStatus?: GovIdStatus;
  onSubmit: (data: EmployeeEditGovIdsFormValues) => void;
  className?: string;
}
