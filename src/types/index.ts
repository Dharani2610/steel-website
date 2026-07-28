export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  fullDescription?: string;
  deliverables: string[];
  capabilities?: string[];
  applications?: string[];
  software: string[];
  benefits: string[];
  processSteps?: string[];
  faqs?: FAQItem[];
  color: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  location: string;
  steelWeight: string; // e.g. "14,200 Tons"
  projectType: string;
  software: string[];
  completionYear: string;
  heroImage: string;
  description: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  memberCount: string;
  drawingCount: string;
  cadPreviewUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface IndustryItem {
  id: string;
  title: string;
  iconName: string;
  image: string;
  tagline: string;
  description: string;
  keyServices: string[];
  featuredStat: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  qualityChecks: string[];
}

export interface OfficeLocation {
  id: string;
  country: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  coordinates: { x: number; y: number };
  lat: number;
  lng: number;
  timezone: string;
  isHeadquarters?: boolean;
}

export interface SoftwareTech {
  id: string;
  name: string;
  category: string;
  logo: string;
  description: string;
  features: string[];
  badgeColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  logo: string;
  quote: string;
  rating: number;
  projectRef: string;
}

export type StoryStage = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

