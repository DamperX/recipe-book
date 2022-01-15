import React from 'react';
import { HeaderProps } from './Header.prop';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};
