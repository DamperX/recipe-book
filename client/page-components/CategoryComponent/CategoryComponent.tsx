import React from 'react';
import { Paragraph, RecipeCard, Title } from '../../components';
import { TopPageComponentProps } from './CategoryComponent.props';

export const CategoryComponent = ({
  category,
  recipes,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div>
      <Title variant="h1">{category.title}</Title>
      <ul className="flex flex-wrap -mx-4">
        {recipes &&
          recipes.map((recipe) => (
            <li key={recipe._id} className="w-1/4 p-4">
              <RecipeCard recipe={recipe} />
            </li>
          ))}
      </ul>

      {category.description && (
        <Paragraph size="md">{category.description}</Paragraph>
      )}
    </div>
  );
};
