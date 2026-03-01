import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PortalStatsStrip } from "./PortalStatsStrip";

const meta: Meta<typeof PortalStatsStrip> = {
  title: "Organisms/PortalStatsStrip",
  component: PortalStatsStrip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PortalStatsStrip>;

export const Default: Story = {
  args: {
    items: [
      { value: "22", label: "Days present" },
      { value: "2", label: "Pending leave" },
      { value: "₱45,230", label: "Last pay" },
    ],
  },
};
