export interface Profile {
  name: string;
  jobTitle: string;
  birthDate: Date;
  location: string;
  status: string;
  profilePicture: string;
  introText: string;
  resumePdf: string;
}

export interface SocialLink {
  platform: 'linkedin' | 'github';
  url: string;
  icon: string;
}

export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface Experience {
  dateRange: string;
  company: string;
  location: string;
  description: string;
}

export interface Education {
  dateRange: string;
  degree: string;
  institution: string;
  description: string;
}

export interface Skill {
  name: string;
  logoUrl: string;
  category: 'backend' | 'frontend' | 'tools';
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
