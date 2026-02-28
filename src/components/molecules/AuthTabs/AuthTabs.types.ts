export interface AuthTabItem {
  key: string;
  label: string;
}

export interface AuthTabsProps {
  tabs: [AuthTabItem, AuthTabItem];
  value: string;
  onChange: (key: string) => void;
  className?: string;
}
