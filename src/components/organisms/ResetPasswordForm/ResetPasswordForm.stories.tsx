import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Box, Text } from "@/components/atoms";
import { ResetPasswordForm } from "./ResetPasswordForm";

const LogoIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="size-4 text-white">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
      clipRule="evenodd"
    />
  </svg>
);

const meta: Meta<typeof ResetPasswordForm> = {
  title: "Organisms/ResetPasswordForm",
  component: ResetPasswordForm,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    logo: { control: false },
    onSubmit: { action: "submit" },
    signInHref: { control: "text" },
    requirements: { control: false },
    isLoading: { control: "boolean" },
    error: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ResetPasswordForm>;

const defaultLogo = (
  <Box className="flex items-center gap-2">
    <Box className="flex size-7 items-center justify-center rounded-lg bg-primary">
      <LogoIcon />
    </Box>
    <Text variant="label" as="span" className="text-lg font-semibold tracking-tight">
      Payro
    </Text>
  </Box>
);

export const Default: Story = {
  args: {
    logo: defaultLogo,
    onSubmit: () => {},
    requirements: [
      { label: "At least 8 characters", met: true },
      { label: "One uppercase letter", met: true },
      { label: "One number", met: false },
      { label: "One special character", met: false },
    ],
  },
};

export const AllRequirementsMet: Story = {
  args: {
    ...Default.args,
    requirements: [
      { label: "At least 8 characters", met: true },
      { label: "One uppercase letter", met: true },
      { label: "One number", met: true },
      { label: "One special character", met: true },
    ],
  },
};
