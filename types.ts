export type ViewState = 'home' | 'about' | 'notes';

export interface Note {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}