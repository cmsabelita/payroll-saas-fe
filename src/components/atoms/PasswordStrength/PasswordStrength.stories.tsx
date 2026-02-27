import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PasswordStrength } from "./PasswordStrength";

const meta: Meta<typeof PasswordStrength> = {
  title: "Atoms/PasswordStrength",
  component: PasswordStrength,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    level: { control: { type: "number", min: 0, max: 4, step: 1 } },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordStrength>;

export const Default: Story = {
  args: {
    level: 0,
  },
};

export const Levels: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-48">
      <PasswordStrength level={0} label="None" />
      <PasswordStrength level={1} label="Weak" />
      <PasswordStrength level={2} label="Fair" />
      <PasswordStrength level={3} label="Good" />
      <PasswordStrength level={4} label="Strong" />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    level: 2,
    label: "Fair",
  },
};
