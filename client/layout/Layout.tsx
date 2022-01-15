import React from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Header className="col-span-5 bg-white p-3 rounded" />
      <Sidebar className="row-span-2 p-3 bg-white rounded" />
      <div className="col-span-3 p-3 bg-white rounded">{children}</div>
      <Footer className="col-span-5 bg-white p-3 rounded" />
    </div>
  );
};
