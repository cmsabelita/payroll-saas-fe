"use client";

import { FaIcon } from "@/components/atoms";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";

export interface ComplianceBreadcrumbSegment {
  label: string;
  href?: string;
}

export interface ComplianceBreadcrumbProps {
  segments: ComplianceBreadcrumbSegment[];
  className?: string;
}

/**
 * Breadcrumb for compliance sub-pages. First segment should be "Compliance" (link to hub).
 * Renders: Compliance > [Section] > [Optional: New | Record #]
 */
export function ComplianceBreadcrumb({ segments, className = "" }: ComplianceBreadcrumbProps) {
  return (
    <nav
      className={`flex items-center gap-2 text-sm text-muted-foreground ${className}`}
      aria-label="Breadcrumb"
    >
      {segments.map((seg, i) => {
        const isLast = i === segments.length - 1;
        return (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="text-border">/</span>}
            {seg.href != null && !isLast ? (
              <NextLink
                href={seg.href}
                className="flex items-center gap-1 hover:text-foreground focus:outline-none focus:underline"
              >
                {i === 0 && <FaIcon icon={faChevronLeft} size="sm" aria-hidden />}
                {seg.label}
              </NextLink>
            ) : (
              <span className={isLast ? "font-medium text-foreground" : ""}>{seg.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
