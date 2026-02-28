import type { ReactNode } from "react";

export interface PortalTopbarProps {
  /** Logo and/or company name (left side) */
  logo: ReactNode;
  /** Portal nav tabs (e.g. UnderlineTabs). Rendered in the center or after logo on small screens. */
  tabs?: ReactNode;
  /** Optional trailing area (e.g. IconButton notifications + user dropdown with Avatar + Text + Icon) */
  trailing?: ReactNode;
  /** Optional class name for the topbar root */
  className?: string;
}
