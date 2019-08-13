import React from 'react';
import Header from '../elements/Header/Header';
import SideNav from '../elements/SideNav/SideNav';
import Auth from './Auth';

const AdminLayout = ({ children }) => (
  <React.Fragment>
    <Header />
    <div className="adminContentBox">
      <SideNav />
      <div className="adminContent">
        {children}
      </div>
    </div>
  </React.Fragment>
);
export default Auth(AdminLayout);
