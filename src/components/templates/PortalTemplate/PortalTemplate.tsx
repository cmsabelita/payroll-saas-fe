import { cn } from "@/utils";
import type { PortalTemplateProps } from "./PortalTemplate.types";

export function PortalTemplate({
  topbar,
  children,
  className,
}: PortalTemplateProps) {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col bg-background",
        className
      )}
    >
      {topbar != null && topbar}
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-6 py-6">{children}</div>
      </main>
    </div>
  );
}
