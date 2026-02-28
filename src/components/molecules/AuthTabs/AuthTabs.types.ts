export interface AuthTabItem {
  key: string;
  label: string;
}

/** "default" = primary active tab. "card" = white active tab + shadow (login mockup). */
export type AuthTabsAppearance = "default" | "card";

export interface AuthTabsProps {
  /** Exactly two tabs (Sign In / Sign Up) */
  tabs: readonly [AuthTabItem, AuthTabItem];
  value: string;
  onChange: (key: string) => void;
  /** "card" for login mockup (white active tab) */
  appearance?: AuthTabsAppearance;
  className?: string;
}
