import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import axios from 'axios';
import { withLayout } from '../../hoc/withLayout';
import { MenuItem } from '../../interfaces/menu.interface';
import { ParsedUrlQuery } from 'querystring';
import { RecipeModel } from '../../interfaces/recipe.interface';
import { CategoryComponent } from '../../page-components/CategoryComponent/CategoryComponent';

interface CategoryPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  recipes: RecipeModel[];
  pageInfo: MenuItem;
}

const Category: NextPage<CategoryPageProps> = ({ pageInfo, recipes }) => {
  console.log(recipes);
  return <CategoryComponent recipes={recipes} category={pageInfo} />;
};

export default withLayout(Category);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.get<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/category'
  );

  return {
    paths: menu.map((menuItem) => `/type/${menuItem.alias}`),
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

  try {
    const { data: menu } = await axios.get<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/category'
    );

    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }

    const { data: pageInfo } = await axios.get<MenuItem>(
      process.env.NEXT_PUBLIC_DOMAIN + '/category/byAlias/' + params.alias
    );

    const { data: recipes } = await axios.post<RecipeModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/recipes/find',
      {
        category: params.alias,
        limit: 10,
      }
    );

    return {
      props: {
        menu,
        recipes,
        pageInfo,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
