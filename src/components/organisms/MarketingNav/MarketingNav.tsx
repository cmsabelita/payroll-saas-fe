import { ThemeToggle } from "@/components/atoms";
import { cn } from "@/utils";
import type { MarketingNavProps } from "./MarketingNav.types";

export function MarketingNav({ ctaHref, ctaLabel, className }: MarketingNavProps) {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-background/95 px-6 py-3 backdrop-blur",
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-8">
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
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Features
            </a>
            <a
              href="/pricing"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center sm:flex" aria-label="Theme">
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-3 border-l border-border pl-4">
            <a
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Log In
            </a>
            <a
              href={ctaHref ?? "/signup"}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              {ctaLabel ?? "Start Free Trial →"}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
