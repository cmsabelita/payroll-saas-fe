import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon, Link, Text } from "@/components/atoms";
import { ListCard } from "@/components/molecules/ListCard";
import { ReportCategoryGrid } from "./ReportCategoryGrid";

const ReportIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </svg>
);

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
            <Icon size="md" className="shrink-0 text-muted-foreground">
              <ReportIcon />
            </Icon>
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
