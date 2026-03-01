"use client";

import NextLink from "next/link";

export const COMPLIANCE_NAV = [
  { href: "/compliance/disciplinary", label: "Disciplinary" },
  { href: "/compliance/training", label: "Training" },
  { href: "/compliance/incidents", label: "Incidents" },
  { href: "/compliance/remittances", label: "Remittances" },
  { href: "/compliance/bir-1601c", label: "BIR 1601-C" },
  { href: "/compliance/bir-2316", label: "BIR 2316" },
  { href: "/compliance/alphalist", label: "Alphalist" },
];

export function ComplianceNav({ currentHref }: { currentHref: string }) {
  return (
    <nav className="space-y-0.5" aria-label="Compliance">
      {COMPLIANCE_NAV.map((item) => (
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
