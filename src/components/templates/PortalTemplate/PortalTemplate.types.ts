import type { ReactNode } from "react";

export interface PortalTemplateProps {
  /** Topbar slot (e.g. PortalTopbar with logo, nav, trailing) */
  topbar?: ReactNode;
  /** Main content */
  children: ReactNode;
  className?: string;
}
