import { Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { CardProps } from "./Card.types";
import styles from "./Card.module.css";

export function Card({ title, children, className, ...rest }: CardProps) {
  return (
    <div className={cn(styles.card, className)} {...rest}>
      {title && (
        <Text as="p" variant="label" className={styles.title}>
          {title}
        </Text>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  );
}
