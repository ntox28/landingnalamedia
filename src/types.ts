export interface PortfolioItem {
  id: string;
  title: string;
  category: string; // matches one of the categories
  image: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // name of Lucide icon to render
  features: string[];
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
  date: string;
}

export interface OrderingStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}
