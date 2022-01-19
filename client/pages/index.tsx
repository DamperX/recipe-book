import type { GetStaticProps, NextPage } from 'next';
import { Paragraph } from '../components';
import { withLayout } from '../hoc/withLayout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
}

const Home: NextPage<HomeProps> = () => {
  return (
    <>
      <Paragraph size="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in tenetur
        unde dicta adipisci nostrum nam libero nobis veniam molestias aut
        molestiae excepturi accusantium magnam provident praesentium, commodi
        enim porro?
      </Paragraph>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data: menu } = await axios.get<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/category'
  );
  return {
    props: {
      menu,
    },
  };
};
