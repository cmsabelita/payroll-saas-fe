import { AppLogoIcon, ThemeToggle } from "@/components/atoms";
import { cn } from "@/utils";
import type { LoginBrandingPanelProps } from "./LoginBrandingPanel.types";

export function LoginBrandingPanel({
  taglineTitle,
  taglineHighlight,
  taglineSubtitle,
  floatingCards,
  className,
}: LoginBrandingPanelProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-end pb-10 auth-branding-panel",
        className
      )}
    >
      <div
        className="absolute right-4 top-4 z-10 flex justify-end"
        aria-label="Theme"
      >
        <ThemeToggle className="border-primary-foreground/30 bg-primary-foreground/15 shadow-md hover:bg-primary-foreground/25" />
      </div>
      <div className="auth-branding-grid absolute inset-0" aria-hidden />
      <div
        className="auth-branding-glow absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full"
        aria-hidden
      />
      {floatingCards != null && (
        <div className="pointer-events-none absolute left-0 right-0 top-8 flex justify-center">
          {floatingCards}
        </div>
      )}
      <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-xl">
        <AppLogoIcon size="lg" className="text-primary-foreground" />
      </div>
      <div className="relative z-10 px-10 text-center">
        <p className="text-2xl font-bold leading-snug text-primary-foreground">
          {taglineTitle}
          <br />
          <span className="text-primary">{taglineHighlight}</span>
        </p>
        <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-primary-foreground/55">
          {taglineSubtitle}
        </p>
      </div>
      <div
        className="relative z-10 mt-7 flex items-center gap-2"
        role="tablist"
        aria-label="Carousel pagination"
      >
        <span
          className="h-1.5 w-6 rounded-full bg-primary-foreground"
          role="tab"
          aria-selected="true"
          aria-label="Slide 1"
        />
        <span
          className="h-1.5 w-1.5 rounded-full bg-primary-foreground/25"
          role="tab"
          aria-selected="false"
          aria-label="Slide 2"
        />
        <span
          className="h-1.5 w-1.5 rounded-full bg-primary-foreground/25"
          role="tab"
          aria-selected="false"
          aria-label="Slide 3"
        />
        <span
          className="h-1.5 w-1.5 rounded-full bg-primary-foreground/25"
          role="tab"
          aria-selected="false"
          aria-label="Slide 4"
        />
      </div>
    </div>
  );
}
