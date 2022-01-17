import {
  CategoryPageModel,
  TopCategory,
} from '../../interfaces/page.interface';
import { RecipeModel } from '../../interfaces/recipe.interface';

export interface TopPageComponentProps {
  firstCategory: TopCategory;
  page: CategoryPageModel;
  recipes: RecipeModel[];
}
