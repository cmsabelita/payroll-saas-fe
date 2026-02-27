import { Text } from "@/components/atoms";
import type { HeaderProps } from "./Header.types";
import styles from "./Header.module.css";

export function Header({ title, actions }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Text as="h1" variant="heading" className={styles.title}>
        {title}
      </Text>
      {actions && <div className={styles.actions}>{actions}</div>}
    </header>
  );
}
