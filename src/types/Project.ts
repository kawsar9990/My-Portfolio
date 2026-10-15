export type ProjectCategory = "all" | "professional" | "personal";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  projectLink: string;
  category: Exclude<ProjectCategory, "all">;
}