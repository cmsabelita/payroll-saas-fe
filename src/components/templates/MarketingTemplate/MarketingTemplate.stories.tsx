import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MarketingTemplate } from "./MarketingTemplate";

const meta: Meta<typeof MarketingTemplate> = {
  title: "Templates/MarketingTemplate",
  component: MarketingTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MarketingTemplate>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-20 text-center text-muted-foreground">
        Page content goes here
      </div>
    ),
  },
};

export const WithCtaOverride: Story = {
  args: {
    ctaHref: "/pricing",
    ctaLabel: "See pricing →",
    children: (
      <div className="p-20 text-center text-muted-foreground">
        Page content goes here
      </div>
    ),
  },
};
