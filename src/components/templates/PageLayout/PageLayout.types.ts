export interface PageLayoutProps {
  /** Page title shown in header */
  title: string;
  /** Optional header actions */
  headerActions?: React.ReactNode;
  children: React.ReactNode;
}
