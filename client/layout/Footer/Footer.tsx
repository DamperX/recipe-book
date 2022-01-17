import React from 'react';
import { FooterProps } from './Footer.prop';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className)} {...props}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-white">
          © 2021 - {format(new Date(), 'yyyy')} DamperX
        </div>
      </div>
    </footer>
  );
};
