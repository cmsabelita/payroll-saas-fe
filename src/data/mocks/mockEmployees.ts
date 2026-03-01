/**
 * Mock employee data for dashboard pages. No API or auth.
 */

export interface MockEmployeeEdit {
  id: string;
  firstName: string;
  lastName: string;
  employeeId: string;
  position: string;
}

export const MOCK_EMPLOYEES_EDIT: MockEmployeeEdit[] = [
  {
    id: "1",
    firstName: "Ana",
    lastName: "Reyes",
    employeeId: "EMP-00042",
    position: "HR Manager",
  },
  {
    id: "2",
    firstName: "Juan",
    lastName: "dela Cruz",
    employeeId: "EMP-00124",
    position: "Software Engineer",
  },
];

export function getMockEmployeeById(id: string): MockEmployeeEdit | undefined {
  const byId = MOCK_EMPLOYEES_EDIT.find((e) => e.id === id);
  if (byId) return byId;
  const byEmployeeId = MOCK_EMPLOYEES_EDIT.find((e) => e.employeeId === id);
  return byEmployeeId;
}

export interface MockEmployeeAccess {
  loginEmail: string;
  lastLogin: string;
  portalEnabled: boolean;
  adminRole: string;
}

const MOCK_EMPLOYEES_ACCESS: Record<string, MockEmployeeAccess> = {
  "1": {
    loginEmail: "ana.reyes@acmecorp.com",
    lastLogin: "Feb 28, 2026 at 9:14 AM",
    portalEnabled: true,
    adminRole: "hr_admin",
  },
  "2": {
    loginEmail: "juan.delacruz@acmecorp.com",
    lastLogin: "Feb 27, 2026 at 2:30 PM",
    portalEnabled: true,
    adminRole: "manager",
  },
};

export function getMockEmployeeAccess(
  id: string
): MockEmployeeAccess | undefined {
  return MOCK_EMPLOYEES_ACCESS[id];
}

export interface MockEmployeeTax {
  mweExempt: boolean;
  taxStatus: string;
  qualifiedDependents: string;
  withholdingAgent: string;
  thirteenthMonthEligible: string;
  ytdSummary?: {
    year: number;
    grossIncome: string;
    taxWithheld: string;
    taxableIncome: string;
  };
}

const MOCK_EMPLOYEES_TAX: Record<string, MockEmployeeTax> = {
  "1": {
    mweExempt: false,
    taxStatus: "s_me",
    qualifiedDependents: "0",
    withholdingAgent: "primary",
    thirteenthMonthEligible: "yes",
    ytdSummary: {
      year: 2026,
      grossIncome: "₱90,000.00",
      taxWithheld: "₱4,166.67",
      taxableIncome: "₱82,000.00",
    },
  },
  "2": {
    mweExempt: false,
    taxStatus: "me1_me4",
    qualifiedDependents: "2",
    withholdingAgent: "primary",
    thirteenthMonthEligible: "yes",
  },
};

export function getMockEmployeeTax(id: string): MockEmployeeTax | undefined {
  return MOCK_EMPLOYEES_TAX[id];
}

export interface MockEmployeeSalary {
  basicSalaryRate: string;
  payFrequency: string;
  dailyRate: string;
  currentSalaryDisplay?: string;
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

const MOCK_EMPLOYEES_SALARY: Record<string, MockEmployeeSalary> = {
  "1": {
    basicSalaryRate: "45000.00",
    payFrequency: "semi_monthly",
    dailyRate: "1,730.77",
    currentSalaryDisplay: "₱45,000",
    mealAllowanceEnabled: true,
    mealAllowanceAmount: "2000.00",
    riceSubsidyEnabled: true,
    riceSubsidyAmount: "2000.00",
    transportationEnabled: false,
    transportationAmount: "",
    payMode: "bank",
    bankName: "bpi",
    accountNumber: "9876-5432-10",
    accountName: "Ana Lim Reyes",
  },
  "2": {
    basicSalaryRate: "65000.00",
    payFrequency: "monthly",
    dailyRate: "2,500.00",
    currentSalaryDisplay: "₱65,000",
    mealAllowanceEnabled: true,
    mealAllowanceAmount: "2000.00",
    riceSubsidyEnabled: false,
    riceSubsidyAmount: "",
    transportationEnabled: true,
    transportationAmount: "1500.00",
    payMode: "bank",
    bankName: "bdo",
    accountNumber: "1234-5678-90",
    accountName: "Juan dela Cruz",
  },
};

export function getMockEmployeeSalary(
  id: string
): MockEmployeeSalary | undefined {
  return MOCK_EMPLOYEES_SALARY[id];
}

export interface MockEmployeeGovIds {
  sssNumber: string;
  sssContributionType: string;
  philHealthNumber: string;
  philHealthMembershipType: string;
  pagIbigMidNumber: string;
  pagIbigMonthlyContribution: string;
  tin: string;
  rdoCode: string;
  rdoName: string;
  sssStatus?: "verified" | "pending";
  philHealthStatus?: "verified" | "pending";
  pagIbigStatus?: "verified" | "pending";
  birStatus?: "verified" | "pending";
}

const MOCK_EMPLOYEES_GOVIDS: Record<string, MockEmployeeGovIds> = {
  "1": {
    sssNumber: "09-1234567-8",
    sssContributionType: "regular",
    philHealthNumber: "21-098765432-1",
    philHealthMembershipType: "employed",
    pagIbigMidNumber: "",
    pagIbigMonthlyContribution: "100",
    tin: "321-654-987-000",
    rdoCode: "044",
    rdoName: "RDO No. 44 — Pasig City",
    sssStatus: "verified",
    philHealthStatus: "verified",
    pagIbigStatus: "pending",
    birStatus: "verified",
  },
  "2": {
    sssNumber: "09-9876543-2",
    sssContributionType: "regular",
    philHealthNumber: "22-123456789-0",
    philHealthMembershipType: "employed",
    pagIbigMidNumber: "1234-5678-9012",
    pagIbigMonthlyContribution: "200",
    tin: "123-456-789-000",
    rdoCode: "032",
    rdoName: "RDO No. 32 — Quezon City",
    sssStatus: "verified",
    philHealthStatus: "verified",
    pagIbigStatus: "verified",
    birStatus: "verified",
  },
};

export function getMockEmployeeGovIds(
  id: string
): MockEmployeeGovIds | undefined {
  return MOCK_EMPLOYEES_GOVIDS[id];
}

export interface MockEmployeeEmployment {
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

const MOCK_EMPLOYEES_EMPLOYMENT: Record<string, MockEmployeeEmployment> = {
  "1": {
    employeeId: "EMP-00042",
    dateHired: "2021-06-01",
    department: "hr",
    jobTitle: "HR Manager",
    employmentType: "regular",
    employmentStatus: "active",
    directSupervisor: "Mark Santos",
    workLocation: "remote",
    shiftSchedule: "standard",
    costCenter: "Head Office",
    separationType: "",
    lastDayOfWork: "",
  },
  "2": {
    employeeId: "EMP-00124",
    dateHired: "2023-01-15",
    department: "engineering",
    jobTitle: "Software Engineer",
    employmentType: "regular",
    employmentStatus: "active",
    directSupervisor: "Maria Santos",
    workLocation: "hybrid",
    shiftSchedule: "flexible",
    costCenter: "Head Office",
    separationType: "",
    lastDayOfWork: "",
  },
};

export function getMockEmployeeEmployment(
  id: string
): MockEmployeeEmployment | undefined {
  return MOCK_EMPLOYEES_EMPLOYMENT[id];
}

export interface MockEmployeeProfile {
  displayName: string;
  employeeId: string;
  position: string;
  department: string;
  employmentType: string;
  employmentStatus: string;
  workSchedule: string;
  workLocation: string;
  reportingManager: string;
  dateHired: string;
  tenureYears?: number;
  salaryDisplay?: string;
  vlDaysRemaining?: number;
  pendingRequests?: number;
  dateOfBirth: string;
  gender: string;
  civilStatus: string;
  nationality: string;
  address: string;
  personalEmail: string;
  mobile: string;
  emergencyContactName: string;
  emergencyRelationship: string;
  emergencyPhone: string;
}

const MOCK_EMPLOYEES_PROFILE: Record<string, MockEmployeeProfile> = {
  "1": {
    displayName: "Ana Reyes",
    employeeId: "EMP-00042",
    position: "HR Manager",
    department: "Human Resources",
    employmentType: "Regular (Permanent)",
    employmentStatus: "Active",
    workSchedule: "8:00 AM – 5:00 PM, Mon–Fri",
    workLocation: "Remote",
    reportingManager: "Mark Santos",
    dateHired: "Jun 1, 2021",
    tenureYears: 5,
    salaryDisplay: "₱45,000",
    vlDaysRemaining: 10,
    pendingRequests: 0,
    dateOfBirth: "June 15, 1990 (34 yrs old)",
    gender: "Female",
    civilStatus: "Single",
    nationality: "Filipino",
    address: "Unit 3B, 12 Sunrise St., Quezon City 1110",
    personalEmail: "ana.reyes@gmail.com",
    mobile: "+63 917 555 0142",
    emergencyContactName: "Luz Reyes",
    emergencyRelationship: "Mother",
    emergencyPhone: "+63 919 555 0088",
  },
  "2": {
    displayName: "Juan dela Cruz",
    employeeId: "EMP-00124",
    position: "Software Engineer",
    department: "Engineering",
    employmentType: "Regular (Permanent)",
    employmentStatus: "Active",
    workSchedule: "8:00 AM – 5:00 PM, Mon–Fri",
    workLocation: "Makati HQ",
    reportingManager: "Alonzo Cruz",
    dateHired: "Jan 15, 2023",
    tenureYears: 3,
    salaryDisplay: "₱32,000",
    vlDaysRemaining: 8,
    pendingRequests: 0,
    dateOfBirth: "March 12, 1992 (33 yrs old)",
    gender: "Male",
    civilStatus: "Single",
    nationality: "Filipino",
    address: "123 Rizal Street, Pasig City 1600",
    personalEmail: "juan@gmail.com",
    mobile: "+63 912 345 6789",
    emergencyContactName: "Rosario dela Cruz",
    emergencyRelationship: "Mother",
    emergencyPhone: "+63 917 654 3210",
  },
};

export function getMockEmployeeProfile(
  id: string
): MockEmployeeProfile | undefined {
  return MOCK_EMPLOYEES_PROFILE[id];
}
