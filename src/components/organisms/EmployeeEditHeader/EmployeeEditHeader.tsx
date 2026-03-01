"use client";

import { Button, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { EmployeeEditHeaderProps } from "./EmployeeEditHeader.types";

export function EmployeeEditHeader({
  displayName,
  subtitle,
  avatar,
  onChangePhoto,
  backLink,
  className,
}: EmployeeEditHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {backLink != null && <div>{backLink}</div>}
      <div className="flex items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center">{avatar}</div>
        <div className="min-w-0 flex-1">
          <Text as="h2" variant="body" className="font-semibold text-foreground">
            {displayName}
          </Text>
          {subtitle != null && subtitle !== "" && (
            <Text variant="caption" as="p" className="text-muted-foreground">
              {subtitle}
            </Text>
          )}
        </div>
        {onChangePhoto != null && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onChangePhoto}
            className="shrink-0"
          >
            Change Photo
          </Button>
        )}
      </div>
    </div>
  );
}
