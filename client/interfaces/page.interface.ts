export enum TopCategory {
  Recipes,
  Features,
  Shop,
}

export interface CategoryPageAdvantage {
  title: string;
  description: string;
}

export interface CategoryPageModel {
  _id: string;
  seoText: string;
  advantages: CategoryPageAdvantage[];
  category: string;
  title: string;
  alias: string;
  secondCategory: string;
  firstCategory: TopCategory;
}
