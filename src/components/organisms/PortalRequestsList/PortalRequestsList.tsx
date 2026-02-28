import { Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { PortalRequestsListProps } from "./PortalRequestsList.types";

export function PortalRequestsList({
  heading = "Pending requests",
  items,
  emptyMessage = "No pending requests.",
  className,
}: PortalRequestsListProps) {
  return (
    <section
      className={cn("rounded-xl border border-border bg-card p-5", className)}
      aria-label="Pending requests"
    >
      <h2 className="mb-4 text-sm font-semibold text-foreground">{heading}</h2>
      {items.length === 0 ? (
        <p className="text-sm text-muted-foreground">{emptyMessage}</p>
      ) : (
        <ul className="space-y-3">
          {items.map((item) => {
            const content = (
              <>
                <span className="font-medium text-foreground">{item.title}</span>
                <span className="text-muted-foreground">
                  {" "}
                  · {item.type} · {item.status} · {item.date}
                </span>
              </>
            );
            return (
              <li key={item.id}>
                {item.href != null ? (
                  <a
                    href={item.href}
                    className="block text-sm hover:underline"
                  >
                    {content}
                  </a>
                ) : (
                  <span className="block text-sm">{content}</span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
