export interface IComment {
  _id: string;
  username: string;
  text: string;
}

export interface ISetting {
  name: string;
  value: number;
  valueName: string;
}

export interface ISteps {
  name: string;
  text: string;
  position: number;
}

export interface IRecipe {
  _id: string;
  name: string;
  shortText: string;
  category: string;
  picture: string;
  settings: ISetting[];
  comments: IComment[];
  steps: ISteps[];
}

export interface RecipeComponentProps {
  recipe: IRecipe;
}
