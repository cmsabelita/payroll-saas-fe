import type { ReactNode } from "react";
import type { AppSidebarNavSection } from "@/components/organisms/AppSidebar/AppSidebar.types";
import type { SidebarUserProps } from "@/components/molecules/SidebarUser/SidebarUser.types";

export interface DashboardTemplateProps {
  /** Sidebar logo node (e.g. Payro logo + wordmark) */
  logo: ReactNode;
  /** Sidebar nav sections */
  navSections: AppSidebarNavSection[];
  /** Sidebar user block */
  user: React.ReactElement<SidebarUserProps>;
  /** Topbar title */
  topbarTitle: string;
  /** Optional topbar subtitle */
  topbarSubtitle?: string;
  /** Optional primary CTA (e.g. Add Employee button) */
  topbarPrimaryAction?: ReactNode;
  /** Optional date range trigger */
  topbarDateRange?: ReactNode;
  /** Topbar trailing (notifications, avatar) */
  topbarTrailing?: ReactNode;
  /** Main content (scrollable area) */
  children: ReactNode;
  className?: string;
}
