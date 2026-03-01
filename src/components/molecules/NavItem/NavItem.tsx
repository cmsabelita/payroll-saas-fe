import NextLink from "next/link";
import { Badge, Box, Icon, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { NavItemProps } from "./NavItem.types";

/** Nav link/button — matches dashboard mockup: no underline, active = success-muted bg/text */
export function NavItem({
  icon,
  label,
  badge,
  href,
  onClick,
  active = false,
  className,
}: NavItemProps) {
  const content = (
    <>
      {icon != null && (
        <Box className="shrink-0 [&_svg]:size-4 [&_svg]:text-current">
          {typeof icon === "object" && icon !== null ? icon : <Icon size="sm">{icon}</Icon>}
        </Box>
      )}
      <Text variant="label" as="span" className="truncate">
        {label}
      </Text>
      {badge != null && (
        <Box className="shrink-0">
          {typeof badge === "string" || typeof badge === "number" ? (
            <Badge variant="secondary">{badge}</Badge>
          ) : (
            badge
          )}
        </Box>
      )}
    </>
  );

  const baseClass = cn(
    "inline-flex items-center gap-2.5 rounded-lg py-[7px] px-2.5 text-left no-underline transition-[background-color,color] duration-[120ms] w-full min-w-0 text-[0.8125rem] font-medium",
    !active &&
      "text-muted-foreground hover:bg-secondary hover:text-foreground"
  );

  const activeStyle = active
    ? {
        backgroundColor: "var(--color-success-muted)",
        color: "var(--color-success-muted-foreground)",
      }
    : undefined;

  if (href != null) {
    return (
      <NextLink
        href={href}
        className={cn(baseClass, className)}
        style={activeStyle}
        aria-current={active ? "page" : undefined}
      >
        {content}
      </NextLink>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(baseClass, className)}
      style={activeStyle}
      aria-current={active ? "page" : undefined}
    >
      {content}
    </button>
  );
}
