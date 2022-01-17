import React from 'react';
import { Paragraph, RecipeCard, Title } from '../../components';
import { TopPageComponentProps } from './CategoryComponent.props';

export const CategoryComponent = ({
  page,
  recipes,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div>
      <Title variant="h1">{page.title}</Title>
      <ul className="flex flex-wrap -mx-4">
        {recipes &&
          recipes.map((recipe) => (
            <li key={recipe._id} className="w-1/4 p-4">
              <RecipeCard recipe={recipe} />
            </li>
          ))}
      </ul>

      {page.seoText && <Paragraph size="md">{page.seoText}</Paragraph>}
    </div>
  );
};
