import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Box, Button, Icon, Text } from "@/components/atoms";
import {
  AuthBranding,
  FormField,
  SocialLoginButtons,
} from "@/components/molecules";
import { AuthLayout } from "./AuthLayout";

const LogoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

const PayroLogoMark = () => (
  <div className="flex items-center gap-2.5">
    <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
      <svg
        className="size-4 text-primary-foreground"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <Text variant="label" as="span" className="text-xl font-semibold tracking-tight text-foreground">
      Payro
    </Text>
  </div>
);

const meta: Meta<typeof AuthLayout> = {
  title: "Organisms/AuthLayout",
  component: AuthLayout,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["full", "card"] },
    logo: { control: false, table: { type: { summary: "ReactNode" } } },
    heading: { control: "text" },
    headingSubtitle: { control: "text" },
    tabs: { control: false },
    tabValue: { control: "text" },
    onTabChange: { action: "tabChange" },
    children: { control: false },
    socialLogin: { control: false },
    dividerLabel: { control: "text" },
    footer: { control: false },
    rightContent: { control: false },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof AuthLayout>;

const authTabs = [
  { key: "login", label: "Log in" },
  { key: "signup", label: "Sign up" },
] as const;

const signInTabs = [
  { key: "signin", label: "Sign In" },
  { key: "signup", label: "Sign Up" },
] as const;

export const Default: Story = {
  render: function AuthLayoutStory() {
    const [tab, setTab] = useState("login");
    return (
      <AuthLayout
        logo={
          <Box className="flex items-center gap-2">
            <Icon size="lg">
              <LogoIcon />
            </Icon>
            <Text variant="label" as="span" className="text-lg font-semibold">
              Payroll
            </Text>
          </Box>
        }
        heading="Welcome back"
        tabs={authTabs}
        tabValue={tab}
        onTabChange={setTab}
        socialLogin={
          <SocialLoginButtons
            buttons={[
              { label: "Continue with Google", icon: <span>G</span>, onClick: () => {} },
              { label: "Continue with GitHub", icon: <span>GH</span>, onClick: () => {} },
            ]}
          />
        }
        rightContent={
          <div className="rounded-lg bg-muted p-12 text-center text-muted-foreground">
            Illustration area
          </div>
        }
      >
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <FormField label="Email" type="email" placeholder="you@example.com" />
          <FormField label="Password" type="password" placeholder="••••••••" />
          <Button type="submit" className="mt-2">
            {tab === "login" ? "Log in" : "Create account"}
          </Button>
        </form>
      </AuthLayout>
    );
  },
};

export const LoginOnly: Story = {
  args: {
    logo: (
      <Box className="flex items-center gap-2">
        <Icon size="lg">
          <LogoIcon />
        </Icon>
        <Text variant="label" as="span" className="text-lg font-semibold">
          Payroll
        </Text>
      </Box>
    ),
    heading: "Log in to your account",
    tabs: authTabs,
    tabValue: "login",
    onTabChange: () => {},
    children: (
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <FormField label="Email" type="email" placeholder="you@example.com" />
        <FormField label="Password" type="password" placeholder="••••••••" />
        <Button type="submit">Log in</Button>
      </form>
    ),
  },
};

/** Login screen aligned with docs/mockups/login.html: card layout, Payro branding, social buttons, footer. */
export const LoginMockup: Story = {
  render: function LoginMockupStory() {
    const [tab, setTab] = useState("signin");
    return (
      <AuthLayout
        variant="card"
        logo={<PayroLogoMark />}
        heading="Welcome to Payro"
        headingSubtitle="Start your experience by signing in or signing up."
        tabs={signInTabs}
        tabValue={tab}
        onTabChange={(k) => setTab(k)}
        dividerLabel="Or continue with"
        footer={
          <>
            Copyright © Payro, All Rights Reserved &nbsp;&middot;&nbsp;{" "}
            <a href="#" className="text-primary hover:underline">
              Terms &amp; Conditions
            </a>{" "}
            &nbsp;&middot;&nbsp;{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy &amp; Policy
            </a>
          </>
        }
        socialLogin={
          <SocialLoginButtons
            size="large"
            buttons={[
              { label: "Continue with Google", icon: <span aria-hidden>G</span>, onClick: () => {} },
              { label: "Continue with Apple", icon: <span aria-hidden>⌘</span>, onClick: () => {} },
              { label: "Continue with Facebook", icon: <span aria-hidden>f</span>, onClick: () => {} },
              { label: "Continue with X", icon: <span aria-hidden>𝕏</span>, onClick: () => {} },
            ]}
          />
        }
        rightContent={<AuthBranding />}
      >
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <FormField
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
            required
          />
          <FormField
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <Button type="submit" className="mt-1 w-full">
            Sign In
          </Button>
        </form>
      </AuthLayout>
    );
  },
};
