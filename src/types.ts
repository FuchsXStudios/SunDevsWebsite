export interface FeatureCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface TestimonialProps {
  text: string;
  author: string;
}

export interface MenuItemProps {
  href: string;
  label: string;
  index: number;
}

export interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}
