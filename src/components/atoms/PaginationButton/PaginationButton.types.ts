import type { ButtonHTMLAttributes } from "react";

export type PaginationButtonVariant = "page" | "prev" | "next" | "ellipsis";

export interface PaginationButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant: PaginationButtonVariant;
  /** Page number (for variant="page") */
  page?: number;
  /** Whether this page is the current page */
  active?: boolean;
  /** For variant="page" with active, pass children to override (e.g. "1") */
  children?: React.ReactNode;
}
