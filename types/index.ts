export interface Speaker {
  id: string;
  name: string;
  position: string;
  company: string;
  bio: string;
  session: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface ScheduleItem {
  id: string;
  time: string;
  endTime: string;
  title: string;
  speaker?: string;
  category: 'workshop' | 'talk' | 'panel' | 'networking' | 'break';
  duration: string;
  description: string;
  stage?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'conference' | 'workshop' | 'networking' | 'speaker';
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  avatar: string;
  review: string;
  rating: number;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'community';
  website: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  recommended?: boolean;
  soldOut?: boolean;
  remaining?: number;
  total?: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  rating: number;
  distance: string;
  price: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface EventInfo {
  name: string;
  tagline: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  description: string;
}
