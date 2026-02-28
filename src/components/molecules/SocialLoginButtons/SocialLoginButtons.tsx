import { IconButton } from "@/components/atoms";
import { cn } from "@/utils";
import type { SocialLoginButtonsProps } from "./SocialLoginButtons.types";

export function SocialLoginButtons({
  buttons,
  className,
}: SocialLoginButtonsProps) {
  return (
    <div
      className={cn("flex flex-wrap items-center justify-center gap-2", className)}
      role="group"
      aria-label="Sign in with social providers"
    >
      {buttons.map((btn) => (
        <IconButton
          key={btn.label}
          variant="outline"
          size="md"
          onClick={btn.onClick}
          disabled={btn.disabled}
          aria-label={btn.label}
        >
          {btn.icon}
        </IconButton>
      ))}
    </div>
  );
}
