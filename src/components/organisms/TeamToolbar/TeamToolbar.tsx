"use client";

import { Button, FaIcon } from "@/components/atoms";
import { cn } from "@/utils";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import type { TeamToolbarProps } from "./TeamToolbar.types";

export function TeamToolbar({ onInviteClick, className }: TeamToolbarProps) {
  return (
    <div className={cn("flex items-center justify-end", className)}>
      <Button onClick={onInviteClick} className="gap-2">
        <FaIcon icon={faPlus} size="sm" aria-hidden />
        Invite Member
      </Button>
    </div>
  );
}
