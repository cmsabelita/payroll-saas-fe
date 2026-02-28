export interface MarketingTestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatarInitials: string;
  avatarBg?: string;
}

export interface MarketingTestimonialsProps {
  heading?: string;
  items: MarketingTestimonialItem[];
  className?: string;
}
