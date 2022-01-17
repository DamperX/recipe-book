import type { GetStaticProps } from 'next';
import { Button, Paragraph, Tag, Title } from '../components';
import { withLayout } from '../hoc/withLayout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

const Home = ({ menu }: HomeProps): JSX.Element => {
  return (
    <>
      <Title variant="h2">Заголовок</Title>
      <Button variant="primary" arrow="right">
        Кнопка
      </Button>
      <Button variant="ghost" arrow="down">
        Кнопка
      </Button>
      <Paragraph size="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in tenetur
        unde dicta adipisci nostrum nam libero nobis veniam molestias aut
        molestiae excepturi accusantium magnam provident praesentium, commodi
        enim porro?
      </Paragraph>
      <Tag>Тест</Tag>
      <Tag size="sm" color="secondary">
        Тест 2
      </Tag>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/category/find',
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
