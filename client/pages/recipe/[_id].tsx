import type { GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { withLayout } from '../../hoc/withLayout';
import { ParsedUrlQuery } from 'querystring';
import { RecipeModel } from '../../interfaces/recipe.interface';
import { RecipeComponent } from '../../page-components/RecipeComponent/RecipeComponent';

interface RecipePageProps extends Record<string, unknown> {
  recipe: RecipeModel;
}

const Recipe = ({ recipe }: RecipePageProps): JSX.Element => {
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

  return {
    props: {
      recipe,
      menu: [],
      firstCategory: 0,
    },
  };
};
