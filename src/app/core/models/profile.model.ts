export interface Profile {
  name: string;
  profilePicture: string;
  resumePdf: string;
  email: string;
  calendlyUrl: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
}
