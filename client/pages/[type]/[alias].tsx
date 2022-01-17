import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import axios from 'axios';
import { withLayout } from '../../hoc/withLayout';
import { MenuItem } from '../../interfaces/menu.interface';
import { ParsedUrlQuery } from 'querystring';
import {
  CategoryPageModel,
  TopCategory,
} from '../../interfaces/page.interface';
import { RecipeModel } from '../../interfaces/recipe.interface';
import { firstLvlMenu } from '../../helpers/helpers';
import { CategoryComponent } from '../../page-components/CategoryComponent/CategoryComponent';

interface CategoryPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopCategory;
  page: CategoryPageModel;
  recipes: RecipeModel[];
}

const Category = ({
  firstCategory,
  page,
  recipes,
}: CategoryPageProps): JSX.Element => {
  return (
    <CategoryComponent
      firstCategory={firstCategory}
      page={page}
      recipes={recipes}
    />
  );
};

export default withLayout(Category);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const firstMenuItem of firstLvlMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/category/find',
      { firstCategory: firstMenuItem.id }
    );

    paths = paths.concat(
      menu.flatMap((subMenu) =>
        subMenu.pages.map((page) => `/${firstMenuItem.route}/${page.alias}`)
      )
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CategoryPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLvlMenu.find((m) => m.route === params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/category/find',
      { firstCategory: firstCategoryItem.id }
    );

    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<CategoryPageModel>(
      process.env.NEXT_PUBLIC_DOMAIN + '/category/byAlias/' + params.alias
    );

    const { data: recipes } = await axios.post<RecipeModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/recipes/find',
      {
        category: page.category,
        limit: 10,
      }
    );

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        recipes,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
