"use client";

import { AppLogoIcon, Avatar, FaIcon, Text } from "@/components/atoms";
import { SidebarUser } from "@/components/molecules";
import { DashboardTemplate } from "@/components/templates";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import {
  DASHBOARD_NAV_SECTIONS_BASE,
  withActiveNav,
} from "../_data/dashboardNav";

export interface DashboardShellProps {
  topbarTitle: string;
  topbarSubtitle?: string;
  topbarPrimaryAction?: React.ReactNode;
  topbarDateRange?: React.ReactNode;
  topbarTrailing?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function DashboardShell({
  topbarTitle,
  topbarSubtitle,
  topbarPrimaryAction,
  topbarDateRange,
  topbarTrailing,
  children,
  className,
}: DashboardShellProps) {
  const pathname = usePathname();
  const navSections = useMemo(
    () => withActiveNav(DASHBOARD_NAV_SECTIONS_BASE, pathname),
    [pathname]
  );

  const logo = (
    <>
      <AppLogoIcon size="md" className="size-7 text-primary" />
      <Text variant="label" as="span" className="text-[17px] font-semibold tracking-tight text-foreground">
        Payro
      </Text>
    </>
  );

  const user = (
    <SidebarUser
      avatar={<Avatar size="sm" fallback="MS" />}
      name="Mark Santos"
      role="Owner"
      action={
        <button
          type="button"
          className="rounded p-1 text-muted-foreground hover:text-foreground"
          aria-label="Open menu"
        >
          <FaIcon icon={faChevronRight} size="sm" />
        </button>
      }
    />
  );

  return (
    <DashboardTemplate
      logo={logo}
      navSections={navSections}
      user={user}
      topbarTitle={topbarTitle}
      topbarSubtitle={topbarSubtitle}
      topbarPrimaryAction={topbarPrimaryAction}
      topbarDateRange={topbarDateRange}
      topbarTrailing={topbarTrailing}
      className={className}
    >
      {children}
    </DashboardTemplate>
  );
}
