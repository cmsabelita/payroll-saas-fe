import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AuthBranding } from "./AuthBranding";

const meta: Meta<typeof AuthBranding> = {
  title: "Molecules/AuthBranding",
  component: AuthBranding,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {
    activeDotIndex: { control: "number", min: 0 },
    dotCount: { control: "number", min: 0 },
  },
};

export default meta;

type Story = StoryObj<typeof AuthBranding>;

export const Default: Story = {
  render: () => (
    <div className="h-[580px] w-[500px] overflow-hidden rounded-xl">
      <AuthBranding />
    </div>
  ),
};

export const NoCards: Story = {
  args: {
    floatingCards: null,
  },
  render: (args) => (
    <div className="h-[580px] w-[500px] overflow-hidden rounded-xl">
      <AuthBranding {...args} />
    </div>
  ),
};
