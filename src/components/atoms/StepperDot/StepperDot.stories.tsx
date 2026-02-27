import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StepperDot } from "./StepperDot";
import { StepperConnector } from "../StepperConnector";

const meta: Meta<typeof StepperDot> = {
  title: "Atoms/StepperDot",
  component: StepperDot,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    state: { control: "select", options: ["active", "done", "pending"] },
  },
};

export default meta;

type Story = StoryObj<typeof StepperDot>;

export const Pending: Story = {
  args: {
    state: "pending",
    step: 1,
  },
};

export const Active: Story = {
  args: {
    state: "active",
    step: 2,
  },
};

export const Done: Story = {
  args: {
    state: "done",
    step: 1,
  },
};

export const WithLabel: Story = {
  args: {
    state: "active",
    step: 2,
    label: "Details",
  },
};

export const StepperRow: Story = {
  render: () => (
    <div className="flex items-start gap-0">
      <StepperDot state="done" step={1} label="Info" />
      <StepperConnector done />
      <StepperDot state="active" step={2} label="Details" />
      <StepperConnector done={false} />
      <StepperDot state="pending" step={3} label="Review" />
    </div>
  ),
};
