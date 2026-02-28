import type { ReactNode } from "react";

export interface ListCardProps {
  title: string;
  /** Optional badge next to title */
  badge?: ReactNode;
  /** List content (rows) — passed as children by organism; molecules must not be composed here */
  children: ReactNode;
  /** Footer "View all" button label; when set, footer is shown and onClickViewAll is required */
  viewAllLabel?: string;
  onClickViewAll?: () => void;
  className?: string;
}
