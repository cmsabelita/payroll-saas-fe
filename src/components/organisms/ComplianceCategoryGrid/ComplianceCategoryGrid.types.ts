export interface ComplianceCategoryItem {
  title: string;
  description: string;
  href: string;
}

export interface ComplianceCategoryGridProps {
  items: ComplianceCategoryItem[];
  className?: string;
}
