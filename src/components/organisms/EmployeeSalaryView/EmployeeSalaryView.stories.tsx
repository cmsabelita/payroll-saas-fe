import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EmployeeSalaryView } from "./EmployeeSalaryView";

const meta: Meta<typeof EmployeeSalaryView> = {
  title: "Organisms/EmployeeSalaryView",
  component: EmployeeSalaryView,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmployeeSalaryView>;

export const Default: Story = {
  args: {
    summary: {
      monthlyBasic: "₱32,000.00",
      dailyRate: "₱1,454.55",
      hourlyRate: "₱181.82",
      effectiveSince: "July 1, 2023",
    },
    history: [
      {
        effectiveDate: "Jul 1, 2023",
        monthlyBasic: "₱32,000.00",
        change: "+₱4,000",
        changePercent: "+14.3%",
        reason: "Annual performance review",
        updatedBy: "Mark Santos",
      },
      {
        effectiveDate: "Jan 15, 2023",
        monthlyBasic: "₱28,000.00",
        updatedBy: "Mark Santos",
      },
    ],
    allowances: [
      {
        type: "Rice Allowance",
        amount: "₱2,000.00",
        frequency: "Monthly",
        taxable: "No (De Minimis)",
        since: "Jan 2023",
      },
      {
        type: "Transport Allowance",
        amount: "₱2,500.00",
        frequency: "Monthly",
        taxable: "Yes",
        since: "Jan 2023",
      },
    ],
    onRecordSalaryChange: () => {},
    onAddAllowance: () => {},
    onEditAllowance: () => {},
  },
  render: (args) => (
    <div className="w-full max-w-4xl">
      <EmployeeSalaryView {...args} />
    </div>
  ),
};
