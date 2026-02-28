export interface InviteRoleOption {
  id: string;
  label: string;
  description: string;
}

export interface InviteMemberFormProps {
  /** Title (e.g. "Invite a team member") */
  title?: string;
  /** Subtitle below title */
  subtitle?: string;
  /** Role options for the selector (defaults to Owner/Admin/HR/Accountant/Manager/Viewer) */
  roles?: InviteRoleOption[];
  /** Pre-selected role id */
  defaultRoleId?: string;
  /** Called on submit with form values */
  onSubmit: (values: {
    email: string;
    roleId: string;
    message?: string;
    sendGuide: boolean;
  }) => void;
  /** Cancel link href */
  cancelHref?: string;
  /** Loading state */
  isLoading?: boolean;
  /** Optional error message */
  error?: string;
  className?: string;
}
