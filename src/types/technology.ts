export type TechnologyCategory =
  | "Backend"
  | "Frontend"
  | "Database"
  | "Desktop"
  | "Mobile";

export type Technology = {
  name: string;
  category: TechnologyCategory;
};
