"use client";

import NextLink from "next/link";

export const SETTINGS_NAV = [
  { href: "/settings/company", label: "General" },
  { href: "/settings/team", label: "Team" },
  { href: "/settings/payroll-config", label: "Payroll Config" },
  { href: "/settings/holidays", label: "Holidays" },
  { href: "/settings/leave-policies", label: "Leave Policies" },
  { href: "/settings/billing", label: "Billing & Plan" },
  { href: "/settings/integrations", label: "Integrations" },
];

export function SettingsNav({ currentHref }: { currentHref: string }) {
  return (
    <nav className="space-y-0.5" aria-label="Settings">
      {SETTINGS_NAV.map((item) => (
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
