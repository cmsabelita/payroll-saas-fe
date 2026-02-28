import { cn } from "@/utils";
import type { MarketingFooterProps } from "./MarketingFooter.types";

const DEFAULT_LINK_GROUPS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Security", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Status", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
] as const;

export function MarketingFooter({
  linkGroups,
  copyrightText,
  tagline,
  className,
}: MarketingFooterProps) {
  const groups = linkGroups ?? DEFAULT_LINK_GROUPS;
  return (
    <footer
      className={cn("border-t border-border bg-muted px-6 py-12 text-muted-foreground", className)}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
                <svg
                  className="h-4 w-4 text-primary-foreground"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-foreground">Payro</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {tagline ??
                "Philippine payroll SaaS — SSS, PhilHealth, Pag-IBIG & BIR compliance built-in."}
            </p>
          </div>
          {groups.map((group) => (
            <div key={group.heading}>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-foreground">
                {group.heading}
              </h4>
              <div className="space-y-2 text-sm">
                {group.links.map((link) => (
                  <p key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-border pt-6">
          <span className="text-sm text-muted-foreground">
            {copyrightText ?? "© Payro. All rights reserved."}
          </span>
          <span className="text-sm text-muted-foreground">
            Made for Filipino businesses
          </span>
        </div>
      </div>
    </footer>
  );
}
