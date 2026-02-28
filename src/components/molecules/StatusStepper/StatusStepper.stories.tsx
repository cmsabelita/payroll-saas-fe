import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StatusStepper } from "./StatusStepper";

const meta: Meta<typeof StatusStepper> = {
  title: "Molecules/StatusStepper",
  component: StatusStepper,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StatusStepper>;

export const Default: Story = {
  args: {
    steps: [
      { key: "1", label: "Details", state: "done" },
      { key: "2", label: "Employees", state: "active" },
      { key: "3", label: "Review", state: "pending" },
    ],
  },
};

export const FirstStep: Story = {
  args: {
    steps: [
      { key: "1", label: "Details", state: "active" },
      { key: "2", label: "Employees", state: "pending" },
      { key: "3", label: "Review", state: "pending" },
    ],
  },
};

export const AllDone: Story = {
  args: {
    steps: [
      { key: "1", label: "Details", state: "done" },
      { key: "2", label: "Employees", state: "done" },
      { key: "3", label: "Review", state: "done" },
    ],
  },
};
