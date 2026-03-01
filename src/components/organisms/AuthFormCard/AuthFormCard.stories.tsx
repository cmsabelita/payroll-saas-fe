import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AppLogoIcon, Box, Button, FaIcon, Link, Text } from "@/components/atoms";
import { FormField } from "@/components/molecules";
import { AuthFormCard } from "./AuthFormCard";

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
      <AppLogoIcon size="sm" className="text-primary-foreground" />
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
        <Link href="#" className="font-semibold text-primary">
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
          <FaIcon icon={faEnvelope} size="lg" className="text-primary" />
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
        <FaIcon icon={faArrowLeft} size="sm" />
        Back to Sign In
      </Link>
    ),
  },
};
