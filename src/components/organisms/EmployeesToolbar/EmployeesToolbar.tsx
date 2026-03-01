"use client";

import { Button, FaIcon, Text } from "@/components/atoms";
import { SearchBar } from "@/components/molecules/SearchBar";
import { cn } from "@/utils";
import {
  faChevronDown,
  faFilter,
  faFileExport,
} from "@fortawesome/free-solid-svg-icons";
import type { EmployeesToolbarProps } from "./EmployeesToolbar.types";

export function EmployeesToolbar({
  searchValue = "",
  onSearchChange,
  searchPlaceholder = "Search by name, ID, department…",
  onFiltersClick,
  onDepartmentClick,
  onExportClick,
  className,
}: EmployeesToolbarProps) {
  return (
    <div
      className={cn("flex flex-wrap items-center gap-3", className)}
      role="toolbar"
      aria-label="Employees filters and search"
    >
      <div className="min-w-0 flex-1 max-w-sm">
        <SearchBar
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange?.(e.target.value)}
          onClear={onSearchChange ? () => onSearchChange("") : undefined}
          size="md"
          className="w-full"
        />
      </div>
      {onFiltersClick != null && (
        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={onFiltersClick}
          className="gap-2"
        >
          <FaIcon icon={faFilter} size="sm" className="text-muted-foreground" />
          <Text variant="label" as="span">
            Filters
          </Text>
          <FaIcon icon={faChevronDown} size="sm" className="text-muted-foreground" />
        </Button>
      )}
      {onDepartmentClick != null && (
        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={onDepartmentClick}
          className="gap-2"
        >
          <Text variant="label" as="span">
            Department
          </Text>
          <FaIcon icon={faChevronDown} size="sm" className="text-muted-foreground" />
        </Button>
      )}
      {onExportClick != null && (
        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={onExportClick}
          className="ml-auto gap-2"
        >
          <FaIcon icon={faFileExport} size="sm" className="text-muted-foreground" />
          <Text variant="label" as="span">
            Export CSV
          </Text>
        </Button>
      )}
    </div>
  );
}
