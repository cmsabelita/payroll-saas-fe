export interface PortalRequestsListItem {
  id: string;
  type: string;
  title: string;
  status: string;
  date: string;
  href?: string;
}

export interface PortalRequestsListProps {
  heading?: string;
  items: PortalRequestsListItem[];
  emptyMessage?: string;
  className?: string;
}
