import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PageLayout } from "./PageLayout";
import { Card, Button } from "@/components";

const meta: Meta<typeof PageLayout> = {
  title: "Templates/PageLayout",
  component: PageLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof PageLayout>;

export const Default: Story = {
  args: {
    title: "Page title",
    children: (
      <p className="text-[var(--color-foreground)]">
        Main content area. Pages compose this template and pass their content as
        children.
      </p>
    ),
  },
};

export const WithContent: Story = {
  args: {
    title: "Payroll SaaS",
    headerActions: (
      <Button variant="outline" size="sm">
        Sign in
      </Button>
    ),
    children: (
      <div className="max-w-2xl space-y-4">
        <Card title="Welcome">
          <p>
            This is an example page using the PageLayout template with a card
            and actions.
          </p>
        </Card>
        <div className="flex gap-2">
          <Button variant="primary">Get started</Button>
          <Button variant="secondary">Learn more</Button>
        </div>
      </div>
    ),
  },
};
