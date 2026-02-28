import { Link } from "@/components/atoms";
import { cn } from "@/utils";
import type { AuthLegalFooterProps } from "./AuthLegalFooter.types";

const DEFAULT_PRODUCT_NAME = "Payro" as const;

export function AuthLegalFooter({
  productName = DEFAULT_PRODUCT_NAME,
  termsHref,
  privacyHref,
  className,
}: AuthLegalFooterProps) {
  return (
    <div className={cn("text-center text-xs text-muted-foreground", className)}>
      <span>Copyright : {productName}, All Rights Reserved</span>
      <span aria-hidden>{" · "}</span>
      <Link href={termsHref} variant="primary" className="hover:underline">
        Terms &amp; Conditions
      </Link>
      <span aria-hidden>{" · "}</span>
      <Link href={privacyHref} variant="primary" className="hover:underline">
        Privacy &amp; Policy
      </Link>
    </div>
  );
}

