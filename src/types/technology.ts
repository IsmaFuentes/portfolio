export type TechnologyCategory =
  | "Backend"
  | "Frontend"
  | "Database"
  | "Desktop"
  | "Mobile"
  | "Multiplatform";

export type Technology = {
  name: string;
  category: TechnologyCategory;
};
