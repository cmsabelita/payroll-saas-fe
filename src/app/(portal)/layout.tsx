/**
 * Employee portal layout: no shell (each page brings its own PortalTemplate + PortalTopbar).
 * Design is distinct from the admin dashboard (dashboard) which has sidebar + topbar.
 */
export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
