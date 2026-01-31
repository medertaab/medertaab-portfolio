export enum Category {
  SOFTWARE = 'Software',
  DESIGN = 'Design',
  ILLUSTRATION = 'Illustration'
}

export interface Project {
  id: string;
  category: Category;
  title: string;
  description: string;
  images: string[];
  link?: string;
  year: string;
}

export interface SocialLink {
  label: string;
  url: string;
}
