import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Box, Button, Icon, Link, Text } from "@/components/atoms";
import { FormField } from "@/components/molecules";
import { AuthFormCard } from "./AuthFormCard";

const LogoIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="size-4 text-white">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
      clipRule="evenodd"
    />
  </svg>
);

const meta: Meta<typeof AuthFormCard> = {
  title: "Organisms/AuthFormCard",
  component: AuthFormCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    logo: { control: false },
    showAccentBar: { control: "boolean" },
    headingBlock: { control: false },
    children: { control: false },
    footer: { control: false },
    centered: { control: "boolean" },
    maxWidth: { control: "select", options: ["md", "full"] },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof AuthFormCard>;

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
    showAccentBar: true,
    headingBlock: (
      <>
        <Text as="h2" variant="heading" className="mb-1.5 text-2xl font-bold">
          Set a new password
        </Text>
        <Text variant="body" as="p" className="text-sm text-muted-foreground">
          Must be at least 8 characters.
        </Text>
      </>
    ),
    children: (
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <FormField label="New Password" type="password" required placeholder="Enter new password" />
        <FormField label="Confirm Password" type="password" required placeholder="Repeat new password" />
        <Button type="submit" className="w-full">
          Update Password
        </Button>
      </form>
    ),
    footer: (
      <Text variant="body" as="p" className="text-center text-sm text-muted-foreground">
        Remember your password?{" "}
        <Link href="#" className="font-semibold text-primary hover:underline">
          Sign in
        </Link>
      </Text>
    ),
  },
};

export const Centered: Story = {
  args: {
    logo: defaultLogo,
    showAccentBar: true,
    centered: true,
    headingBlock: (
      <>
        <Box className="mb-5 flex size-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
          <Icon size="lg" className="text-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>
          </Icon>
        </Box>
        <Text as="h2" variant="heading" className="mb-2 text-2xl font-bold">
          Forgot your password?
        </Text>
        <Text variant="body" as="p" className="max-w-xs text-sm text-muted-foreground">
          Enter your registered email and we&apos;ll send you a reset link.
        </Text>
      </>
    ),
    children: (
      <form className="w-full space-y-5" onSubmit={(e) => e.preventDefault()}>
        <FormField label="Email Address" type="email" required placeholder="Enter your email" />
        <Button type="submit" className="w-full">
          Send Reset Link
        </Button>
      </form>
    ),
    footer: (
      <Link href="#" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Sign In
      </Link>
    ),
  },
};
