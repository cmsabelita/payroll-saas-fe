"use client";

import NextLink from "next/link";

export const REPORTS_NAV = [
  { href: "/reports/payroll", label: "Payroll" },
  { href: "/reports/attendance", label: "Attendance" },
  { href: "/reports/leave", label: "Leave" },
  { href: "/reports/government", label: "Government" },
  { href: "/reports/headcount", label: "Headcount" },
];

export function ReportsNav({ currentHref }: { currentHref: string }) {
  return (
    <nav className="space-y-0.5" aria-label="Reports">
      {REPORTS_NAV.map((item) => (
        <NextLink
          key={item.href}
          href={item.href}
          className={`block rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted ${
            item.href === currentHref ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.label}
        </NextLink>
      ))}
    </nav>
  );
}
