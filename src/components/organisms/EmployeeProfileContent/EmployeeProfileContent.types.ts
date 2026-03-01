import type { ReactNode } from "react";

export interface EmployeeProfileEmploymentDetails {
  employeeId: string;
  employmentType: string;
  position: string;
  department: string;
  team?: string;
  workSchedule: string;
  workLocation: string;
  reportingManager: string | ReactNode;
}

export interface EmployeeProfilePersonalInfo {
  dateOfBirth: string;
  gender: string;
  civilStatus: string;
  nationality: string;
  address: string;
  personalEmail: string | ReactNode;
  mobile: string;
}

export interface EmployeeProfileEmergencyContact {
  contactName: string;
  relationship: string;
  phone: string;
}

export interface EmployeeProfileContentProps {
  employmentDetails: EmployeeProfileEmploymentDetails;
  personalInfo: EmployeeProfilePersonalInfo;
  emergencyContact: EmployeeProfileEmergencyContact;
  tabs?: { key: string; label: string }[];
  activeTab?: string;
  onTabChange?: (key: string) => void;
  className?: string;
}
