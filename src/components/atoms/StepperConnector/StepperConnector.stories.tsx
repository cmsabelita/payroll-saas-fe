import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StepperConnector } from "./StepperConnector";

const meta: Meta<typeof StepperConnector> = {
  title: "Atoms/StepperConnector",
  component: StepperConnector,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    done: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof StepperConnector>;

export const Pending: Story = {
  args: { done: false, className: "w-6" },
};

export const Done: Story = {
  args: { done: true, className: "w-6" },
};
