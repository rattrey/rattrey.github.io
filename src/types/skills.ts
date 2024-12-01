import { ReactElement } from 'react';

export type CategoryId = 'technical' | 'analytics' | 'leadership' | 'business';

export type ExpertiseLevel = 'Expert' | 'Advanced' | 'Intermediate';

export interface CaseStudy {
  project: string;
  impact: string | string[];
  description: string;
  keyProjects?: {
    name: string;
    details: string;
  }[];
}

export interface Skill {
  name: string;
  yearsExperience: number;
  currentlyUsing: boolean;
  expertise: ExpertiseLevel;  // Updated this line
  applications: string[];
  caseStudy: CaseStudy;
  relatedSkills: string[];
}

export interface Category {
  icon: ReactElement;
  title: string;
  description: string;
  primaryColor: string;
  accentColor: string;
  textColor: string;
  skills: Skill[];
}

export type Categories = {
  [K in CategoryId]: Category;
};