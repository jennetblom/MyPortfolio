import React from 'react';
import Header from '../Header/Header.jsx';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-background">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;