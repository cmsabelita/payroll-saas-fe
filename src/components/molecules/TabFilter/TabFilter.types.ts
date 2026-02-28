export interface TabFilterItem {
  key: string;
  label: string;
  count?: number | string;
}

export interface TabFilterProps {
  tabs: TabFilterItem[];
  value: string;
  onChange: (key: string) => void;
  className?: string;
}
