import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EmployeeEditGovIdsSection } from "./EmployeeEditGovIdsSection";

const meta: Meta<typeof EmployeeEditGovIdsSection> = {
  title: "Organisms/EmployeeEditGovIdsSection",
  component: EmployeeEditGovIdsSection,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmployeeEditGovIdsSection>;

export const Default: Story = {
  args: {
    defaultValues: {
      sssNumber: "09-1234567-8",
      sssContributionType: "regular",
      philHealthNumber: "21-098765432-1",
      philHealthMembershipType: "employed",
      pagIbigMidNumber: "",
      pagIbigMonthlyContribution: "100",
      tin: "321-654-987-000",
      rdoCode: "044",
      rdoName: "RDO No. 44 — Pasig City",
    },
    sssStatus: "verified",
    philHealthStatus: "verified",
    pagIbigStatus: "pending",
    birStatus: "verified",
    onSubmit: () => {},
  },
  render: (args) => (
    <div className="w-full max-w-xl">
      <EmployeeEditGovIdsSection {...args} />
    </div>
  ),
};
