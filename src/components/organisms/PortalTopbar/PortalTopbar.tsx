"use client";

import {
  faCalendarDays,
  faComments,
  faFileLines,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { FaIcon, Text, ThemeToggle } from "@/components/atoms";
import { cn } from "@/utils";
import type { PortalTopbarProps } from "./PortalTopbar.types";

const PORTAL_NAV_ITEMS: { href: string; label: string; icon: typeof faHome }[] = [
  { href: "/portal", label: "Home", icon: faHome },
  { href: "/portal/payslips", label: "Payslips", icon: faFileLines },
  { href: "/portal/attendance", label: "Attendance", icon: faCalendarDays },
  { href: "/portal/requests", label: "Requests", icon: faComments },
];

export function PortalTopbar({
  logo,
  companyName,
  tabs,
  requestsBadgeCount = 0,
  trailing,
  className,
}: PortalTopbarProps) {
  const pathname = usePathname();
  const useDefaultNav = tabs == null;

  return (
    <header
      className={cn(
        "sticky top-0 z-10 border-b border-border bg-background",
        className
      )}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-6 px-6">
        <div className="flex min-w-0 shrink-0 items-center gap-2">
          {logo}
          {companyName != null && companyName !== "" && (
            <>
              <Text variant="caption" as="span" className="text-muted-foreground">
                ·
              </Text>
              <Text variant="caption" as="span" className="text-muted-foreground">
                {companyName}
              </Text>
            </>
          )}
        </div>
        {useDefaultNav ? (
          <nav
            className="flex min-w-0 flex-1 items-center justify-center gap-1"
            aria-label="Portal navigation"
          >
            {PORTAL_NAV_ITEMS.map((item) => {
              const isRequests = item.href === "/portal/requests";
              const isActive = pathname === item.href || (item.href === "/portal" && (pathname === "/portal" || pathname === "/portal/"));
              return (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  <FaIcon icon={item.icon} size="sm" />
                  {item.label}
                  {isRequests && requestsBadgeCount > 0 ? (
                    <span className="rounded-full bg-warning px-1.5 py-0.5 text-xs font-semibold text-warning-foreground">
                      {requestsBadgeCount > 99 ? "99+" : requestsBadgeCount}
                    </span>
                  ) : null}
                </NextLink>
              );
            })}
          </nav>
        ) : (
          <nav
            className="flex min-w-0 flex-1 items-center justify-center gap-1"
            aria-label="Portal navigation"
          >
            {tabs}
          </nav>
        )}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle className="shrink-0" />
          {trailing != null && trailing}
        </div>
      </div>
    </header>
  );
}
