"use client";

import { FaIcon } from "@/components/atoms";
import type { AppSidebarNavSection } from "@/components/organisms/AppSidebar/AppSidebar.types";
import {
  faBuildingUser,
  faChartSimple,
  faCheckDouble,
  faCog,
  faFileLines,
  faGaugeHigh,
  faScaleBalanced,
  faUsers,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

/** Base nav sections (no `active`). Pages merge pathname to set active. */
export const DASHBOARD_NAV_SECTIONS_BASE: AppSidebarNavSection[] = [
  {
    label: "Main",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: <FaIcon icon={faGaugeHigh} size="sm" /> },
      { label: "Employees", href: "/employees", icon: <FaIcon icon={faUsers} size="sm" /> },
      { label: "Organization", href: "/organization/departments", icon: <FaIcon icon={faBuildingUser} size="sm" /> },
      { label: "Team", href: "/team", icon: <FaIcon icon={faUserGroup} size="sm" /> },
    ],
  },
  {
    label: "Time & Requests",
    items: [
      { label: "Attendance", href: "/attendance", icon: <FaIcon icon={faChartSimple} size="sm" /> },
      { label: "Approvals", href: "/approvals", icon: <FaIcon icon={faCheckDouble} size="sm" />, badge: "12" },
    ],
  },
  {
    label: "Finance",
    items: [
      { label: "Payroll", href: "/payroll", icon: <FaIcon icon={faFileLines} size="sm" /> },
      { label: "Compliance", href: "/compliance/disciplinary", icon: <FaIcon icon={faScaleBalanced} size="sm" /> },
    ],
  },
  {
    label: "Analytics",
    items: [
      { label: "Reports", href: "/reports", icon: <FaIcon icon={faChartSimple} size="sm" /> },
    ],
  },
  {
    label: "System",
    items: [
      { label: "Settings", href: "/settings/company", icon: <FaIcon icon={faCog} size="sm" /> },
    ],
  },
];

export function withActiveNav(
  sections: AppSidebarNavSection[],
  pathname: string
): AppSidebarNavSection[] {
  return sections.map((section) => ({
    ...section,
    items: section.items.map((item) => ({
      ...item,
      active: item.href != null && pathname.startsWith(item.href),
    })),
  }));
}
