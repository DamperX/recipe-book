import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Title } from '..';
import { RecipeCardProps } from './RecipeCard.prop';

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link href={`/recipe/${recipe._id}`}>
      <a className="block">
        <div className="relative overflow-hidden w-full h-auto pt-[100%]">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_DOMAIN}/${recipe.picture}`}
              alt={recipe.name}
              width="280"
              height="280"
            />
          </div>
        </div>
        <Title variant="h3">{recipe.name}</Title>
      </a>
    </Link>
  );
};
