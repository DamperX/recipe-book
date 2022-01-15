import React from 'react';
import { FooterProps } from './Footer.prop';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>Footer</div>;
};
