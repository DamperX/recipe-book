import cn from 'classnames';
import React from 'react';
import { ButtonProps } from './Button.prop';
import ArrowIcon from './arrow.svg';

export const Button = ({
  variant,
  children,
  className,
  arrow = 'none',
  ...props
}: ButtonProps): JSX.Element => {
  const buttonClasses = cn(
    'inline-block',
    'py-2',
    'px-3.5',
    'rounded',
    'text-base',
    'border',
    'hover:bg-rose-700',
    'hover:border-rose-700',
    'transition-all',
    'ease-in',
    'cursor-pointer',
    {
      'text-white': variant === 'primary',
      'bg-rose-600': variant === 'primary',
      'border-transparent': variant === 'primary',
      'bg-transparent': variant === 'ghost',
      'text-rose-600': variant === 'ghost',
      'border-rose-600': variant === 'ghost',
      'hover:text-white': variant === 'ghost',
    },
    className
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
      {arrow !== 'none' && (
        <span
          className={cn('inline-block', 'ml-1.5', 'align-middle', 'text-2xl', {
            'rotate-90': arrow === 'down',
          })}
        >
          <ArrowIcon className="h-4 w-4" />
        </span>
      )}
    </button>
  );
};
