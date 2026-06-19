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
}

export interface ValueBlock {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  emailAlt: string;
  location: string;
  social: {
    linkedin: string;
    facebook: string;
    instagram: string;
    tiktok: string;
  };
}
