export interface RecipeStep {
  name: string;
  text: string;
  position: number;
}

export interface StepSetting {
  name: string;
  value: number;
  valueName: string;
}

export interface RecipeModel {
  _id: string;
  steps: RecipeStep[];
  settings: StepSetting[];
  comments: string[];
  category: string;
  shortText: string;
  picture: string;
  name: string;
}
