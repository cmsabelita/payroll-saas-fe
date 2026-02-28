import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AppLogoIcon } from "./AppLogoIcon";

const meta: Meta<typeof AppLogoIcon> = {
  title: "Atoms/AppLogoIcon",
  component: AppLogoIcon,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof AppLogoIcon>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <AppLogoIcon size="sm" className="text-foreground" />
      <AppLogoIcon size="md" className="text-foreground" />
      <AppLogoIcon size="lg" className="text-primary" />
    </div>
  ),
};

export const OnPrimary: Story = {
  render: () => (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
      <AppLogoIcon size="lg" className="text-primary-foreground" />
    </div>
  ),
};
