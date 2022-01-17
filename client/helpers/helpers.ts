import { TopLvlMenuItem } from '../interfaces/menu.interface';
import { TopCategory } from '../interfaces/page.interface';

export const firstLvlMenu: TopLvlMenuItem[] = [
  { route: 'recipes', name: 'Recipes', id: TopCategory.Recipes },
  { route: 'tips', name: 'Tips & Tricks', id: TopCategory.Features },
  { route: 'shop', name: 'Shop', id: TopCategory.Shop },
];
