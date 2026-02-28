import { cn } from "@/utils";
import type { LoginTemplateProps } from "./LoginTemplate.types";

export function LoginTemplate({
  logo,
  backLink,
  headingBlock,
  tabBlock,
  children,
  footer,
  brandingPanel,
  className,
}: LoginTemplateProps) {
  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center p-6 bg-muted",
        className
      )}
    >
      <div className="w-full max-w-[940px] min-h-[580px] bg-background rounded-2xl shadow-2xl overflow-hidden flex">
        <div className="w-[440px] shrink-0 flex flex-col p-11">
          {(logo != null || backLink != null) && (
            <div className="flex flex-row items-center justify-between mb-9">
              {logo}
              {backLink}
            </div>
          )}
          {headingBlock != null && (
            <div className="mb-7">{headingBlock}</div>
          )}
          {tabBlock != null && <div className="mb-7">{tabBlock}</div>}
          <div className="flex-1">{children}</div>
          {footer != null && <div className="mt-auto pt-8">{footer}</div>}
        </div>
        {brandingPanel != null && (
          <div className="flex-1 relative overflow-hidden flex flex-col items-center justify-end pb-10">
            {brandingPanel}
          </div>
        )}
      </div>
    </div>
  );
}
