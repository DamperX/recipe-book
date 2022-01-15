import type { NextPage } from 'next';
import { Button, Paragraph, Tag, Title } from '../components';
import { withLayout } from '../hoc/withLayout';

const Home: NextPage = () => {
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
