export interface Profile {
  name: string;
  jobTitle: string;
  birthDate: Date;
  location: string;
  status: string;
  profilePicture: string;
  introText: string;
  resumePdf: string;
  email: string;
  phone: string;
  website: string;
}

export interface SocialLink {
  platform: 'linkedin' | 'github' | 'website' | 'email' | 'phone';
  url: string;
  icon: string;
  label?: string;
}

export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface Experience {
  dateRange: string;
  duration: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights?: string[];
  stack: string[];
}

export interface Education {
  dateRange: string;
  duration: string;
  degree: string;
  institution: string;
  description: string;
}

export interface Skill {
  name: string;
  logoUrl?: string;
  category: 'backend' | 'frontend' | 'other';
}

export interface Language {
  name: string;
  level: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  features: string[];
  stack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  thumbnailUrl?: string;
  status: 'published' | 'coming-soon';
}
