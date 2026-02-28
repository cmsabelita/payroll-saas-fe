import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LoginTemplate } from "./LoginTemplate";
import { LoginBrandingPanel } from "@/components/organisms";

const meta: Meta<typeof LoginTemplate> = {
  title: "Templates/LoginTemplate",
  component: LoginTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LoginTemplate>;

export const Default: Story = {
  args: {
    children: (
      <p className="text-foreground">
        Main form content placeholder. No logo, back link, heading, tabs,
        footer, or branding panel.
      </p>
    ),
  },
};

export const WithLeftContent: Story = {
  args: {
    logo: <span className="text-lg font-semibold text-foreground">Payro</span>,
    backLink: (
      <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
        Back to home
      </a>
    ),
    headingBlock: (
      <h1 className="text-2xl font-semibold text-foreground">
        Welcome to Payro
      </h1>
    ),
    tabBlock: (
      <div className="flex gap-2">
        <span className="rounded-lg bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow">
          Sign in
        </span>
        <span className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground">
          Sign up
        </span>
      </div>
    ),
    children: (
      <p className="text-foreground">
        Form fields and submit button would go here.
      </p>
    ),
    footer: (
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Payro. All rights reserved.
      </p>
    ),
  },
};

export const WithBranding: Story = {
  args: {
    logo: <span className="text-lg font-semibold text-foreground">Payro</span>,
    backLink: (
      <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
        Back to home
      </a>
    ),
    headingBlock: (
      <h1 className="text-2xl font-semibold text-foreground">
        Welcome to Payro
      </h1>
    ),
    tabBlock: (
      <div className="flex gap-2">
        <span className="rounded-lg bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow">
          Sign in
        </span>
        <span className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground">
          Sign up
        </span>
      </div>
    ),
    children: (
      <p className="text-foreground">
        Form fields and submit button would go here.
      </p>
    ),
    footer: (
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Payro. All rights reserved.
      </p>
    ),
    brandingPanel: (
      <LoginBrandingPanel
        taglineTitle="Philippine Payroll,"
        taglineHighlight="Simplified."
        taglineSubtitle="Automate payroll, BIR compliance, and more."
      />
    ),
  },
};
