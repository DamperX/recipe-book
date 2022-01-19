import axios from 'axios';
import Image from 'next/image';
import React, { SyntheticEvent, useState } from 'react';
import { Button, Paragraph, Title } from '../../components';
import { useInput } from '../../hooks/useinput';
import { IRecipe, RecipeComponentProps } from './RecipeComponent.prop';

export const RecipeComponent = ({
  recipe,
}: RecipeComponentProps): JSX.Element => {
  const [recipeState, setRecipeState] = useState<IRecipe>(recipe);
  const username = useInput('');
  const text = useInput('');
  const addComment = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_DOMAIN}/recipes/comment/create`,
        {
          username: username.value,
          text: text.value,
          recipeId: recipeState._id,
        }
      );

      setRecipeState({
        ...recipeState,
        comments: [...recipeState.comments, res.data],
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Title className="mb-3" variant="h1">
        {recipeState.name}
      </Title>
      <Paragraph className="mb-6" size="lg">
        {recipeState.shortText}
      </Paragraph>
      <div className="flex -mx-4">
        <div className="w-2/6 px-4">
          <Title variant="h2" className="mb-2">
            Ingridients
          </Title>
          <ul>
            {recipeState.settings.map((setting) => (
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
          <Title variant="h2" className="mb-2">
            Preparation
          </Title>
          <ol>
            {recipeState.steps.map((step) => (
              <li key={step.name} className="mb-4">
                <Title variant="h3">{step.name}</Title>
                <Paragraph size="md">{step.text}</Paragraph>
              </li>
            ))}
          </ol>
        </div>
        <div className="w-2/6 px-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_DOMAIN}/${recipeState.picture}`}
            alt={recipeState.name}
            width="477"
            height="477"
          />
        </div>
      </div>
      <div>
        <div className="mb-7">
          <Title variant="h2" className="mb-6">
            Comments
          </Title>
          {recipeState.comments.map((comment) => (
            <div key={comment._id} className="mb-4">
              <Title variant="h3" className="mb-2">
                {comment.username}
              </Title>
              <Paragraph size="sm">{comment.text}</Paragraph>
            </div>
          ))}
        </div>
        <div>
          <Title variant="h2" className="mb-6">
            Add comment
          </Title>
          <form onSubmit={addComment}>
            <label className="block mb-4">
              <Paragraph size="md" className="mb-1.5 font-bold">
                Name
              </Paragraph>
              <input
                {...username}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0"
              />
            </label>
            <label className="block mb-4">
              <Paragraph size="md" className="mb-1.5 font-bold">
                Comment
              </Paragraph>
              <textarea
                {...text}
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0"
              />
            </label>
            <Button variant="primary">Send</Button>
          </form>
        </div>
      </div>
    </>
  );
};
