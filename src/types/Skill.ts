import { ReactNode } from 'react';

export type CategoryId = 'highlights' | 'frontend' | 'backend' | 'devops';

export interface Skill {
  id: string;
  name: string;
  customIcon: ReactNode;
  lightBg: string;
  darkBg: string;
}

export interface Category {
  id: CategoryId;
  label: string;
}