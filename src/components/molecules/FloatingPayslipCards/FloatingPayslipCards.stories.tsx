import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FloatingPayslipCards } from "./FloatingPayslipCards";

const meta: Meta<typeof FloatingPayslipCards> = {
  title: "Molecules/FloatingPayslipCards",
  component: FloatingPayslipCards,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FloatingPayslipCards>;

export const Default: Story = {};
