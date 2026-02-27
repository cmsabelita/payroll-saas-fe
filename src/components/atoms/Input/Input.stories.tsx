import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";
import { Label } from "../Label";
import { Icon } from "../Icon";
import { IconButton } from "../IconButton";

const SearchSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);
const EyeSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const XSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter value",
    size: "md",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-72">
      <Label htmlFor="input-email">Email</Label>
      <Input id="input-email" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-64">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    placeholder: "Invalid value",
    error: true,
    defaultValue: "bad@",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    disabled: true,
  },
};

export const WithAdornments: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <div className="flex flex-col gap-1">
        <Label htmlFor="search">Search (left icon)</Label>
        <Input
          id="search"
          type="search"
          placeholder="Search..."
          leftAdornment={
            <Icon size="sm">
              <SearchSvg />
            </Icon>
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="password">Password (right toggle)</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter password"
          rightAdornment={
            <IconButton
              variant="ghost"
              size="sm"
              aria-label="Toggle password visibility"
            >
              <Icon size="sm">
                <EyeSvg />
              </Icon>
            </IconButton>
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="both">Both sides</Label>
        <Input
          id="both"
          placeholder="With both adornments"
          leftAdornment={
            <Icon size="sm">
              <SearchSvg />
            </Icon>
          }
          rightAdornment={
            <IconButton variant="ghost" size="sm" aria-label="Clear">
              <Icon size="sm">
                <XSvg />
              </Icon>
            </IconButton>
          }
        />
      </div>
    </div>
  ),
};
