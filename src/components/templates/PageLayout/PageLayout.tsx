import { Header } from "@/components/organisms";
import type { PageLayoutProps } from "./PageLayout.types";
import styles from "./PageLayout.module.css";

export function PageLayout({
  title,
  headerActions,
  children,
}: PageLayoutProps) {
  return (
    <div className={styles.layout}>
      <Header title={title} actions={headerActions} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
