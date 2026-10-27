export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  href: string;
  image?: string;
  heroImage?: string;
  longDescription?: string;
  directAnswer?: string;
  benefits?: ServiceBenefit[];
  technologies?: string[];
  useCases?: ServiceUseCase[];
  faq?: ServiceFAQ[];
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceUseCase {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ValueBlock {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectCase {
  name: string;
  url: string;
  category: string;
  summary: string;
  highlights: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  emailAlt: string;
  location: string;
  hours: string;
  social: {
    linkedin: string;
    facebook: string;
    instagram: string;
    tiktok: string;
  };
}
