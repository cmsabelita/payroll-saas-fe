"use client";

import { useState } from "react";
import { Box, Button, Checkbox, Input, Label, Link, Radio, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { InviteMemberFormProps, InviteRoleOption } from "./InviteMemberForm.types";

function RoleCard({
  option,
  selected,
  onSelect,
}: {
  option: InviteRoleOption;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex w-full items-start gap-3 rounded-xl border-2 p-3.5 text-left transition-colors",
        "hover:border-primary/50 hover:bg-primary/5",
        selected
          ? "border-primary bg-primary/10"
          : "border-border bg-background"
      )}
      role="radio"
      aria-checked={selected}
    >
      <Radio
        readOnly
        checked={selected}
        className="mt-0.5 shrink-0"
        aria-hidden
      />
      <div className="min-w-0 flex-1">
        <Text variant="body" as="p" className="text-sm font-semibold text-foreground">
          {option.label}
        </Text>
        <Text variant="caption" as="p" className="mt-0.5 text-xs text-muted-foreground">
          {option.description}
        </Text>
      </div>
    </button>
  );
}

const defaultRoles: InviteRoleOption[] = [
  { id: "owner", label: "Owner", description: "Full access including billing management" },
  { id: "admin", label: "Admin", description: "Full access except subscription & billing" },
  { id: "hr", label: "HR", description: "Employees, attendance, leave, compliance management" },
  { id: "accountant", label: "Accountant", description: "Payroll, compliance, reports (read & write)" },
  { id: "manager", label: "Manager", description: "Own team attendance and leave approvals" },
  { id: "viewer", label: "Viewer", description: "Employee self-service portal only (read-only admin)" },
];

export function InviteMemberForm({
  title = "Invite a team member",
  subtitle = "They'll receive an email to create their Payro account.",
  roles = defaultRoles,
  defaultRoleId,
  onSubmit,
  cancelHref = "#",
  isLoading = false,
  error,
  className,
}: InviteMemberFormProps) {
  const [email, setEmail] = useState("");
  const [roleId, setRoleId] = useState(defaultRoleId ?? roles[0]?.id ?? "");
  const [message, setMessage] = useState("");
  const [sendGuide, setSendGuide] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, roleId, message: message.trim() || undefined, sendGuide });
  };

  return (
    <Box
      className={cn(
        "w-full max-w-lg rounded-2xl border border-border bg-background p-8 shadow-sm",
        className
      )}
    >
      <div className="mb-6">
        <Text as="h2" variant="heading" className="mb-1 text-xl font-bold text-foreground">
          {title}
        </Text>
        <Text variant="body" as="p" className="text-sm text-muted-foreground">
          {subtitle}
        </Text>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <Label htmlFor="invite-email" required>
            Email Address
          </Label>
          <Input
            id="invite-email"
            type="email"
            placeholder="colleague@acme.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
            aria-invalid={Boolean(error)}
          />
        </div>

        <div className="space-y-1.5">
          <span className="text-sm font-medium text-foreground leading-none">
            Role <span className="ml-0.5 text-destructive" aria-hidden>*</span>
          </span>
          <div className="mt-1 flex flex-col gap-2" role="radiogroup" aria-label="Role">
            {roles.map((option) => (
              <RoleCard
                key={option.id}
                option={option}
                selected={roleId === option.id}
                onSelect={() => setRoleId(option.id)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="invite-message">
            Personal Message <Text as="span" variant="caption" className="font-normal text-muted-foreground">(optional)</Text>
          </Label>
          <textarea
            id="invite-message"
            rows={3}
            placeholder="Add a personalized note to the invite email…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-y rounded-xl border-2 border-border bg-input px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="invite-send-guide"
            checked={sendGuide}
            onChange={(e) => setSendGuide(e.target.checked)}
            className="mt-0.5 shrink-0"
          />
          <Label htmlFor="invite-send-guide" className="cursor-pointer text-sm font-normal text-muted-foreground">
            Send onboarding guide with the invitation
          </Label>
        </div>

        {error && (
          <Text variant="caption" className="text-destructive" role="alert">
            {error}
          </Text>
        )}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Sending…" : "Send Invitation"}
        </Button>
      </form>

      <div className="mt-4 text-center">
        <Link href={cancelHref} variant="muted" className="text-sm">
          Cancel
        </Link>
      </div>
    </Box>
  );
}
