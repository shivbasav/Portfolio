export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'building' | 'shipped';
  tech: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
