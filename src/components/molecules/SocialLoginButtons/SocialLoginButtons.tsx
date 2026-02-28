import { IconButton } from "@/components/atoms";
import { cn } from "@/utils";
import type { SocialLoginButtonsProps } from "./SocialLoginButtons.types";

const sizeClasses = {
  default: "gap-2",
  large: "gap-3",
} as const;

const buttonSizeClasses = {
  default: "",
  large: "h-12 w-12 rounded-xl",
} as const;

const iconWrapperClasses = {
  default: "size-4 flex items-center justify-center [&_svg]:size-4",
  large: "size-5 flex items-center justify-center [&_svg]:size-5",
} as const;

export function SocialLoginButtons({
  buttons,
  size = "default",
  className,
}: SocialLoginButtonsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center",
        sizeClasses[size],
        className
      )}
      role="group"
      aria-label="Sign in with social providers"
    >
      {buttons.map((btn) => (
        <IconButton
          key={btn.label}
          variant="outline"
          size={size === "large" ? "lg" : "md"}
          className={buttonSizeClasses[size] || undefined}
          onClick={btn.onClick}
          disabled={btn.disabled}
          aria-label={btn.label}
        >
          <span className={iconWrapperClasses[size]}>
            {btn.icon}
          </span>
        </IconButton>
      ))}
    </div>
  );
}
