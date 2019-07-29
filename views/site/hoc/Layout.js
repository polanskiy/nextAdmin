import React from 'react';
import Header from '../elements/Header';

const Layout = ({ children }) => (
  <div className="globalBox">
    <Header />
    <div className="contentBox">
      {children}
    </div>
  </div>
);
export default Layout;
