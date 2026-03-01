import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EmployeeEditTaxSection } from "./EmployeeEditTaxSection";

const meta: Meta<typeof EmployeeEditTaxSection> = {
  title: "Organisms/EmployeeEditTaxSection",
  component: EmployeeEditTaxSection,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmployeeEditTaxSection>;

export const Default: Story = {
  args: {
    defaultValues: {
      mweExempt: false,
      taxStatus: "s_me",
      qualifiedDependents: "0",
      withholdingAgent: "primary",
      thirteenthMonthEligible: "yes",
    },
    ytdSummary: {
      year: 2026,
      grossIncome: "₱90,000.00",
      taxWithheld: "₱4,166.67",
      taxableIncome: "₱82,000.00",
    },
    onSubmit: () => {},
  },
  render: (args) => (
    <div className="w-full max-w-xl">
      <EmployeeEditTaxSection {...args} />
    </div>
  ),
};

export const MweExempt: Story = {
  args: {
    defaultValues: {
      mweExempt: true,
      taxStatus: "s_me",
      qualifiedDependents: "0",
      withholdingAgent: "primary",
      thirteenthMonthEligible: "yes",
    },
    onSubmit: () => {},
  },
  render: (args) => (
    <div className="w-full max-w-xl">
      <EmployeeEditTaxSection {...args} />
    </div>
  ),
};
