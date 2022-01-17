import Image from 'next/image';
import React from 'react';
import { Paragraph, Title } from '../../components';

export const RecipeComponent = ({ recipe }) => {
  console.log(recipe);
  return (
    <>
      <Title className="mb-3" variant="h1">
        {recipe.name}
      </Title>
      <Paragraph className="mb-6" size="lg">
        {recipe.shortText}
      </Paragraph>
      <div className="flex -mx-4">
        <div className="w-2/6 px-4">
          <ul>
            {recipe.settings.map((setting) => (
              <li key={setting.name} className="flex justify-between mb-2">
                <Paragraph size="sm">{setting.name}</Paragraph>
                <Paragraph size="sm" className="font-bold">
                  {setting.value} {setting.valueName}
                </Paragraph>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/6 px-4">
          <ol>
            {recipe.steps.map((step) => (
              <li key={step.name} className="mb-5">
                <Title variant="h3">{step.name}</Title>
                <Paragraph size="md">{step.text}</Paragraph>
              </li>
            ))}
          </ol>
        </div>
        <div className="w-2/6 px-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_DOMAIN}/${recipe.picture}`}
            alt={recipe.name}
            width="477"
            height="477"
          />
        </div>
      </div>
    </>
  );
};
