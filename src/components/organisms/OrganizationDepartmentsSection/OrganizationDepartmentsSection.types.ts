export interface OrganizationDepartmentsSectionRow {
  id: string;
  name: string;
  code?: string;
  headCount: number;
  parent?: string;
}

export interface OrganizationDepartmentsSectionProps {
  rows: OrganizationDepartmentsSectionRow[];
  onAdd?: () => void;
  onView?: (id: string) => void;
  className?: string;
}
