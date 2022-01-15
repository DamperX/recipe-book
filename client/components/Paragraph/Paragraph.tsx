import React from 'react';
import cn from 'classnames';
import { ParagraphProps } from './Paragraph.prop';

export const Paragraph = ({
  size = 'md',
  className,
  children,
  ...props
}: ParagraphProps): JSX.Element => {
  const paragraphClasses = cn(
    'text-neutral-800',
    'leading-5',
    {
      'text-base': size === 'sm',
      'text-lg': size === 'md',
      'text-2xl': size === 'lg',
    },
    className
  );

  return (
    <p className={paragraphClasses} {...props}>
      {children}
    </p>
  );
};
