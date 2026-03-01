import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { AppLogoIcon, Box, Button, FaIcon, Text } from "@/components/atoms";
import {
  AuthBranding,
  FormField,
  SocialLoginButtons,
} from "@/components/molecules";
import { AuthLayout } from "./AuthLayout";

const PayroLogoMark = () => (
  <div className="flex items-center gap-2.5">
    <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
      <AppLogoIcon size="sm" className="text-primary-foreground" />
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
            <FaIcon icon={faGaugeHigh} size="lg" />
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
              { label: "Continue with Google", icon: <FaIcon icon={faGoogle} size="md" />, onClick: () => {} },
              { label: "Continue with GitHub", icon: <FaIcon icon={faGaugeHigh} size="md" />, onClick: () => {} },
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
        <FaIcon icon={faGaugeHigh} size="lg" />
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
            <a href="#" className="text-primary">
              Terms &amp; Conditions
            </a>{" "}
            &nbsp;&middot;&nbsp;{" "}
            <a href="#" className="text-primary">
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
