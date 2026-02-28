import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AuthLegalFooter } from "./AuthLegalFooter";

const meta: Meta<typeof AuthLegalFooter> = {
  title: "Molecules/AuthLegalFooter",
  component: AuthLegalFooter,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    termsHref: { control: "text" },
    privacyHref: { control: "text" },
    productName: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof AuthLegalFooter>;

export const Default: Story = {
  args: {
    termsHref: "#",
    privacyHref: "#",
  },
};

