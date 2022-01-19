import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import axios from 'axios';
import { withLayout } from '../../hoc/withLayout';
import { ParsedUrlQuery } from 'querystring';
import { RecipeModel } from '../../interfaces/recipe.interface';
import { RecipeComponent } from '../../page-components/RecipeComponent/RecipeComponent';
import { MenuItem } from '../../interfaces/menu.interface';

interface RecipePageProps extends Record<string, unknown> {
  recipe: RecipeModel;
  menu: MenuItem[];
}

const Recipe: NextPage<RecipePageProps> = ({ recipe }) => {
  console.log(recipe);
  return <RecipeComponent recipe={recipe} />;
};

export default withLayout(Recipe);

export const getServerSideProps: GetStaticProps<RecipePageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { data: recipe } = await axios.get<RecipeModel>(
    process.env.NEXT_PUBLIC_DOMAIN + '/recipes/' + params._id
  );

  const { data: menu } = await axios.get<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/category'
  );

  return {
    props: {
      recipe,
      menu,
    },
  };
};
