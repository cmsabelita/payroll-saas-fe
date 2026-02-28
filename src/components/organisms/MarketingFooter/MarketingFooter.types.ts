export interface MarketingFooterLinkGroup {
  heading: string;
  links: { label: string; href: string }[];
}

export interface MarketingFooterProps {
  /** Override the three link column groups. Default: Product · Resources · Legal */
  linkGroups?: MarketingFooterLinkGroup[];
  copyrightText?: string;
  tagline?: string;
  className?: string;
}
