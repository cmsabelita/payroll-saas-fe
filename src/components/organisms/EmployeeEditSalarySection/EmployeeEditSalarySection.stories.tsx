import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EmployeeEditSalarySection } from "./EmployeeEditSalarySection";

const meta: Meta<typeof EmployeeEditSalarySection> = {
  title: "Organisms/EmployeeEditSalarySection",
  component: EmployeeEditSalarySection,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmployeeEditSalarySection>;

export const Default: Story = {
  args: {
    currentSalaryDisplay: "₱45,000",
    onSubmit: () => {},
  },
  render: (args) => (
    <div className="w-full max-w-xl">
      <EmployeeEditSalarySection {...args} />
    </div>
  ),
};

export const WithoutCurrentSalary: Story = {
  args: {
    onSubmit: () => {},
  },
  render: (args) => (
    <div className="w-full max-w-xl">
      <EmployeeEditSalarySection {...args} />
    </div>
  ),
};
