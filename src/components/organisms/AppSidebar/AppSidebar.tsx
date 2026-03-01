"use client";

import { Box, Divider, Text } from "@/components/atoms";
import { NavItem } from "@/components/molecules/NavItem";
import { cn } from "@/utils";
import type { AppSidebarProps } from "./AppSidebar.types";

export function AppSidebar({
  logo,
  navSections,
  user,
  collapseButton,
  className,
}: AppSidebarProps) {
  return (
    <aside
      className={cn(
        "flex h-full w-[232px] shrink-0 flex-col border-r border-border-subtle bg-card overflow-y-auto",
        className
      )}
      aria-label="Main navigation"
    >
      {/* Logo row — mockup: gap-2.5 px-4 py-4 border-b border-gray-100 */}
      <Box className="flex shrink-0 items-center gap-2.5 border-b border-border-subtle px-4 py-4">
        {logo}
      </Box>
      {/* Nav — mockup: px-2.5 pt-2 pb-4; section labels mt-5 mb-1, uppercase small */}
      <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto px-2.5 pb-4 pt-2">
        {navSections.map((section, sectionIndex) => (
          <Box key={sectionIndex} className={cn("flex flex-col", sectionIndex > 0 && "mt-5")}>
            {section.label != null && section.label !== "" && (
              <Text
                variant="caption"
                as="span"
                className="mb-1 px-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.07em] text-muted-foreground"
              >
                {section.label}
              </Text>
            )}
            <Box className="flex flex-col gap-0.5">
              {section.items.map((item, itemIndex) => (
                <NavItem key={itemIndex} {...item} />
              ))}
            </Box>
          </Box>
        ))}
      </nav>
      {collapseButton != null && (
        <>
          <Divider className="shrink-0" />
          <Box className="shrink-0 px-3 py-2">{collapseButton}</Box>
        </>
      )}
      <Divider className="shrink-0" />
      {/* User block — mockup: border-t px-3 py-3 */}
      <Box className="shrink-0 px-3 py-3">{user}</Box>
    </aside>
  );
}
