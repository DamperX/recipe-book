import { MenuItem } from '../../interfaces/menu.interface';
import { RecipeModel } from '../../interfaces/recipe.interface';

export interface TopPageComponentProps {
  category: MenuItem;
  recipes: RecipeModel[];
}
