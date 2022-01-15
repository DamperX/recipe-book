import React from 'react';
import { TagProps } from './Tag.prop';
import cn from 'classnames';

export const Tag = ({
  size = 'sm',
  children,
  color = 'primary',
  href,
  ...props
}: TagProps): JSX.Element => {
  const tagClasses = cn(
    'inline-block',
    'text-sm',
    'leading-5',
    'text-center',
    'px-1',
    'w-15',
    {
      'h-6': size === 'sm',
      'pt-0.5': size === 'sm',
      'h-8': size === 'md',
      'pt-1.5': size === 'md',
      'bg-teal-600': color === 'primary',
      'text-white': color === 'primary',
      'bg-yellow-300': color === 'secondary',
      'text-black': color === 'secondary',
    }
  );
  return (
    <div className={tagClasses} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
