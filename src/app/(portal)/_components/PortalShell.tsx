"use client";

import { Avatar, FaIcon, IconButton, Text } from "@/components/atoms";
import { PortalTopbar } from "@/components/organisms";
import { PortalTemplate } from "@/components/templates";
import { faBell, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MOCK_REQUESTS_BADGE = 2;

interface PortalShellProps {
  children: React.ReactNode;
}

export function PortalShell({ children }: PortalShellProps) {
  const topbar = (
    <PortalTopbar
      logo={
        <Text variant="label" as="span" className="font-semibold tracking-tight text-foreground">
          Payro
        </Text>
      }
      requestsBadgeCount={MOCK_REQUESTS_BADGE}
      trailing={
        <>
          <IconButton variant="ghost" size="sm" aria-label="Notifications">
            <FaIcon icon={faBell} size="sm" />
          </IconButton>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm hover:bg-muted"
            aria-label="User menu"
          >
            <Avatar size="sm" fallback="JD" />
            <div className="hidden sm:block">
              <Text variant="caption" as="p" className="font-semibold leading-none text-foreground">
                Juan dela Cruz
              </Text>
              <Text variant="caption" as="p" className="text-muted-foreground">
                Software Engineer
              </Text>
            </div>
            <FaIcon icon={faChevronDown} size="sm" className="text-muted-foreground" />
          </button>
        </>
      }
    />
  );

  return <PortalTemplate topbar={topbar}>{children}</PortalTemplate>;
}
