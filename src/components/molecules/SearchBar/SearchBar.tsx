"use client";

import { Icon, IconButton, Input } from "@/components/atoms";
import { cn } from "@/utils";
import type { SearchBarProps } from "./SearchBar.types";

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const ClearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export function SearchBar({
  placeholder = "Search",
  onClear,
  value,
  size = "md",
  className,
  ...rest
}: SearchBarProps) {
  const showClear =
    onClear != null &&
    value != null &&
    value !== "" &&
    (typeof value === "string" ? value.trim() !== "" : true);

  return (
    <Input
      role="search"
      type="search"
      size={size}
      placeholder={placeholder}
      value={value}
      leftAdornment={
        <Icon size="sm" aria-hidden>
          <SearchIcon />
        </Icon>
      }
      rightAdornment={
        showClear ? (
          <IconButton
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClear}
            aria-label="Clear search"
          >
            <ClearIcon />
          </IconButton>
        ) : undefined
      }
      className={cn(className)}
      {...rest}
    />
  );
}
