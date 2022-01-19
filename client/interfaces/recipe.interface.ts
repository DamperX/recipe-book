export interface IStep {
  name: string;
  text: string;
  position: number;
}

export interface ISetting {
  name: string;
  value: number;
  valueName: string;
}

export interface IComment {
  _id: string;
  username: string;
  text: string;
}

export interface RecipeModel {
  _id: string;
  steps: IStep[];
  settings: ISetting[];
  comments: IComment[];
  category: string;
  shortText: string;
  picture: string;
  name: string;
}
