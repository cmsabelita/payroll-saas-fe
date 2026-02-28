import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AlertBanner } from "./AlertBanner";

const meta: Meta<typeof AlertBanner> = {
  title: "Molecules/AlertBanner",
  component: AlertBanner,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["error", "warning", "info", "success"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof AlertBanner>;

export const Error: Story = {
  args: {
    variant: "error",
    title: "Something went wrong",
    description: "Please try again or contact support.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Action required",
    description: "Your plan is over the limit. Upgrade to add more employees.",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "New feature available",
    description: "Check out the updated reports section.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Saved successfully",
    description: "Your changes have been applied.",
  },
};

export const TitleOnly: Story = {
  args: {
    variant: "warning",
    title: "Quick notice",
  },
};
