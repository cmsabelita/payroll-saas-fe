import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "@/components/atoms";
import { EmployeeRowCell } from "./EmployeeRowCell";

const meta: Meta<typeof EmployeeRowCell> = {
  title: "Molecules/EmployeeRowCell",
  component: EmployeeRowCell,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmployeeRowCell>;

export const Default: Story = {
  args: {
    avatar: <Avatar fallback="JD" />,
    primaryLine: "Jane Doe",
    secondaryLine: "ID-10042",
  },
};

export const SingleLine: Story = {
  args: {
    avatar: <Avatar fallback="BS" />,
    primaryLine: "Bob Smith",
  },
};
