import React from 'react';
import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.prop';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
