import React from 'react';
import Header from '../views/admin/Header/Header';
import SideNav from '../views/admin/SideNav/SideNav';

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <div className="sideContentBox">
      <SideNav />
      {children}
    </div>
  </React.Fragment>
);

export default Layout;
