import { Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { PortalGreetingProps } from "./PortalGreeting.types";

export function PortalGreeting({
  date,
  title,
  quickActions,
  className,
}: PortalGreetingProps) {
  return (
    <section
      className={cn("mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", className)}
      aria-label="Greeting and quick actions"
    >
      <div>
        <p className="text-sm text-muted-foreground">{date}</p>
        <Text variant="heading2" as="h1" className="mt-0.5">
          {title}
        </Text>
      </div>
      <div className="flex flex-wrap gap-2">
        {quickActions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            className="inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
          >
            {action.label}
          </a>
        ))}
      </div>
    </section>
  );
}
