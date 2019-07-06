import React from 'react';
import Header from '../elements/Header';

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <div className="contentBox">
      {children}
    </div>
  </React.Fragment>
);
export default Layout;
