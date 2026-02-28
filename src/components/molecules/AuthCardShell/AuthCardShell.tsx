import { cn } from "@/utils";
import type { AuthCardShellProps } from "./AuthCardShell.types";

export function AuthCardShell({
  logo,
  showAccentBar = true,
  headingBlock,
  children,
  footer,
  centered = false,
  maxWidth = "md",
  className,
}: AuthCardShellProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl bg-background shadow-xl",
        maxWidth === "md" && "max-w-md",
        className
      )}
    >
      {showAccentBar && <div className="h-1 w-full shrink-0 bg-primary" />}
      <div className={cn("p-10", centered && "flex flex-col items-center text-center")}>
        <div className={cn("flex items-center gap-2", centered ? "mb-8 justify-center" : "mb-8")}>
          {logo}
        </div>
        {headingBlock != null && (
          <div className={centered ? "mb-8 flex flex-col items-center text-center" : "mb-7"}>
            {headingBlock}
          </div>
        )}
        <div className={cn("flex-1", centered && "flex w-full flex-col items-center")}>
          {children ?? null}
        </div>
        {footer != null && (
          <div className={cn("mt-7", centered && "flex flex-col items-center")}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
