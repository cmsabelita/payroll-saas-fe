export interface OrganizationPositionsSectionRow {
  id: string;
  title: string;
  department: string;
  headCount: number;
}

export interface OrganizationPositionsSectionProps {
  rows: OrganizationPositionsSectionRow[];
  onAdd?: () => void;
  onView?: (id: string) => void;
  className?: string;
}
