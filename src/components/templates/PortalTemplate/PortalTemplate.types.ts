import type { ReactNode } from "react";

export interface PortalTemplateProps {
  /** Topbar slot (e.g. PortalTopbar or PortalTopbarContent). Rendered above main. */
  topbar?: ReactNode;
  children: ReactNode;
  className?: string;
}
