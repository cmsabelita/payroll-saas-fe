import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "@/components/molecules";
import { RequestFormCard } from "./RequestFormCard";

const meta: Meta<typeof RequestFormCard> = {
  title: "Organisms/RequestFormCard",
  component: RequestFormCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    submitLabel: { control: "text" },
    onSubmit: { action: "submit" },
    onCancel: { action: "cancel" },
    cancelLabel: { control: "text" },
    hint: { control: "text" },
    isLoading: { control: "boolean" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof RequestFormCard>;

export const Default: Story = {
  args: {
    title: "Leave Request",
    submitLabel: "Submit Leave Request",
    onSubmit: (e) => e.preventDefault(),
    onCancel: () => {},
    cancelLabel: "Cancel",
    hint: "Your request will be reviewed by your manager. You'll be notified by email once approved or rejected.",
    children: (
      <>
        <FormField label="Leave Type" required placeholder="Sick Leave" />
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Date From" type="date" required />
          <FormField label="Date To" type="date" required />
        </div>
        <FormField label="Reason" placeholder="Briefly describe the reason..." />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-lg">
        <Story />
      </div>
    ),
  ],
};

export const WithoutHint: Story = {
  args: {
    ...Default.args,
    hint: undefined,
  },
  decorators: Default.decorators,
};
