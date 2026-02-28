import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { AuthTabs } from "./AuthTabs";

const meta: Meta<typeof AuthTabs> = {
  title: "Molecules/AuthTabs",
  component: AuthTabs,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AuthTabs>;

const tabs = [
  { key: "login", label: "Log in" },
  { key: "signup", label: "Sign up" },
] as const;

function AuthTabsDemo() {
  const [value, setValue] = useState("login");
  return (
    <AuthTabs
      tabs={tabs}
      value={value}
      onChange={(key) => setValue(key)}
    />
  );
}

export const Default: Story = {
  render: () => <AuthTabsDemo />,
};
