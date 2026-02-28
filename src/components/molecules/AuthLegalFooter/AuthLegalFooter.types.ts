import type { AnchorHTMLAttributes } from "react";

export interface AuthLegalFooterProps {
  productName?: string;
  termsHref: AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  privacyHref: AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  className?: string;
}

