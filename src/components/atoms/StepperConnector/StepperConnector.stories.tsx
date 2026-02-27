import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StepperConnector } from "./StepperConnector";
import { StepperDot } from "../StepperDot";

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
  args: { done: false },
};

export const Done: Story = {
  args: { done: true },
};

export const BetweenDots: Story = {
  render: () => (
    <div className="flex items-center gap-0">
      <StepperDot state="done" step={1} />
      <StepperConnector done />
      <StepperDot state="active" step={2} />
      <StepperConnector done={false} />
      <StepperDot state="pending" step={3} />
    </div>
  ),
};
