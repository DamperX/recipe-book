import React from 'react';
import { SidebarProps } from './Sidebar.prop';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};
