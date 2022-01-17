import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import axios from 'axios';
import { withLayout } from '../../hoc/withLayout';
import { MenuItem } from '../../interfaces/menu.interface';
import { firstLvlMenu } from '../../helpers/helpers';
import { ParsedUrlQuery } from 'querystring';

const Type = ({ firstCategory }: TypeProps): JSX.Element => {
  return <>Type {firstCategory}</>;
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = firstLvlMenu.map((menu) => `/${menu.route}`);
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
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

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/category/find',
    { firstCategory: firstCategoryItem.id }
  );

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}