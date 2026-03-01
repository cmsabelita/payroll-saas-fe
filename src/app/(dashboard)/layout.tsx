/**
 * Admin dashboard layout: passes through children only.
 * Each page (dashboard, employees, employees/new, …) wraps its content in
 * DashboardShell (sidebar + topbar + main). Design is distinct from the
 * employee portal (portal) which has topbar-only, no sidebar.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
