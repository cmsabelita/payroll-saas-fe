"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/utils";
import type { ThemeToggleProps } from "./ThemeToggle.types";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle({
  showSystem = true,
  className,
}: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(styles.placeholder, className)}
        aria-hidden
        title="Theme (loading…)"
      />
    );
  }

  return (
    <div className={cn(styles.wrapper, className)}>
      <label htmlFor="theme-toggle" className="sr-only">
        Theme
      </label>
      <select
        id="theme-toggle"
        value={theme ?? "system"}
        onChange={(e) => setTheme(e.target.value)}
        className={styles.select}
        aria-label="Select theme"
      >
        {showSystem && <option value="system">System</option>}
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
