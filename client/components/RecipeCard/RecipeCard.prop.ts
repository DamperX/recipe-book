import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RecipeModel } from '../../interfaces/recipe.interface';

export interface RecipeCardProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  recipe: RecipeModel;
}
