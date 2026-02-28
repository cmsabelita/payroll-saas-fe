import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaIcon, Link, Text } from "@/components/atoms";
import { ListCard } from "@/components/molecules/ListCard";
import { ReportCategoryGrid } from "./ReportCategoryGrid";

const meta: Meta<typeof ReportCategoryGrid> = {
  title: "Organisms/ReportCategoryGrid",
  component: ReportCategoryGrid,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    children: { control: false },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ReportCategoryGrid>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ListCard
          title="Payroll summary"
          viewAllLabel="View report"
          onClickViewAll={() => {}}
        >
          <Text variant="caption" as="p" className="text-muted-foreground">
            Monthly payroll totals and breakdown by department.
          </Text>
        </ListCard>
        <ListCard
          title="Tax & compliance"
          viewAllLabel="View report"
          onClickViewAll={() => {}}
        >
          <Text variant="caption" as="p" className="text-muted-foreground">
            Tax withholdings and compliance status.
          </Text>
        </ListCard>
        <ListCard
          title="Leave balance"
          viewAllLabel="View report"
          onClickViewAll={() => {}}
        >
          <Text variant="caption" as="p" className="text-muted-foreground">
            Employee leave balances and usage.
          </Text>
        </ListCard>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl">
        <Story />
      </div>
    ),
  ],
};

export const LinkCards: Story = {
  args: {
    children: (
      <>
        {[
          {
            title: "Payroll summary",
            description: "Monthly payroll totals and breakdown.",
            href: "#",
          },
          {
            title: "Tax & compliance",
            description: "Tax withholdings and compliance status.",
            href: "#",
          },
        ].map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-start gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:bg-muted/50"
          >
            <FaIcon icon={faFileLines} size="md" className="shrink-0 text-muted-foreground" />
            <div className="min-w-0">
              <Text variant="label" as="span" className="font-medium">
                {item.title}
              </Text>
              <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
                {item.description}
              </Text>
              <Text variant="caption" as="span" className="mt-1 text-primary">
                View report →
              </Text>
            </div>
          </Link>
        ))}
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl">
        <Story />
      </div>
    ),
  ],
};
