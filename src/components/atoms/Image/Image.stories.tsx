import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Image } from "./Image";

const meta: Meta<typeof Image> = {
  title: "Atoms/Image",
  component: Image,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["rounded", "circle", "square"] },
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Rounded: Story = {
  args: {
    src: "https://picsum.photos/200/120",
    alt: "Sample",
    variant: "rounded",
    className: "w-48 h-28",
  },
};

export const Circle: Story = {
  args: {
    src: "https://picsum.photos/100/100",
    alt: "Avatar",
    variant: "circle",
    className: "size-24",
  },
};

export const Fallback: Story = {
  args: {
    src: "https://invalid.example/image.png",
    alt: "Broken",
    fallback: <span>No image</span>,
    className: "w-48 h-28",
  },
};
