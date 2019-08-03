import React from 'react';
import Nav from '../elements/Nav';

const Layout = ({ children }) => (
  <div className="globalBox">
    <Nav />
    {children}
  </div>
);
export default Layout;
