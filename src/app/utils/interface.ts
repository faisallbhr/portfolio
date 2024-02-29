import { IconType } from "react-icons";

export interface INavItem {
  section: string;
  name: string;
  icon: IconType;
}

export interface ISocialMedia {
  link: string;
  image: IconType;
  title: string;
}

export interface IExperience {
  position: string;
  type: string;
  company: string;
  link: string;
  date: string;
  jobDesc: string[];
  techStack: string[];
}

export interface IProject {
  name: string;
  link: string;
  position: string;
  description: string;
  jobDesc: string[];
  techStack: string[];
}

export interface IArticle {
  title: string;
  link: string;
}

export interface StickyState {
  about: boolean;
  experience: boolean;
  projects: boolean;
  articles: boolean;
}
