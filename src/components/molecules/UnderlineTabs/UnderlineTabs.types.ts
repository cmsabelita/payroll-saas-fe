export interface UnderlineTabItem {
  key: string;
  label: string;
}

export interface UnderlineTabsProps {
  tabs: UnderlineTabItem[];
  value: string;
  onChange: (key: string) => void;
  className?: string;
}
