export interface EmployeeEditTabItem {
  key: string;
  label: string;
}

export interface EmployeeEditTabsProps {
  tabs: EmployeeEditTabItem[];
  activeTab: string;
  onTabChange: (key: string) => void;
  className?: string;
}
