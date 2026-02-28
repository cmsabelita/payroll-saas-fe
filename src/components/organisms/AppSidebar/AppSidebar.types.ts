import type { ReactNode } from "react";
import type { NavItemProps } from "@/components/molecules/NavItem/NavItem.types";
import type { SidebarUserProps } from "@/components/molecules/SidebarUser/SidebarUser.types";

export interface AppSidebarNavSection {
  /** Optional section label above the nav items */
  label?: string;
  items: NavItemProps[];
}

export interface AppSidebarProps {
  /** Logo area (e.g. Box + Icon + Text). Rendered at top. */
  logo: ReactNode;
  /** Nav sections: each has optional label and list of NavItem props */
  navSections: AppSidebarNavSection[];
  /** User block at bottom (avatar, name, role, optional action) */
  user: React.ReactElement<SidebarUserProps>;
  /** Optional collapse toggle button (e.g. IconButton). Shown at bottom above user. */
  collapseButton?: ReactNode;
  /** Optional class name for the sidebar root */
  className?: string;
}
