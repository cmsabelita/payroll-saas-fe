import { Badge, Box, Icon, Link, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { NavItemProps } from "./NavItem.types";

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
        <Box className="shrink-0 [&_svg]:size-4">
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
    "inline-flex items-center gap-2 rounded-md px-3 py-2 text-left transition-colors w-full min-w-0",
    active && "bg-muted text-foreground",
    !active && "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
  );

  if (href != null) {
    return (
      <Link
        href={href}
        className={cn(baseClass, className)}
        aria-current={active ? "page" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(baseClass, className)}
      aria-current={active ? "page" : undefined}
    >
      {content}
    </button>
  );
}
