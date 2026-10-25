export type ProjectCategory = "all" | "full-stack" | "frontend";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  projectLink: string;
  category: Exclude<ProjectCategory, "all">;
}