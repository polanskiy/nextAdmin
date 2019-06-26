import React from 'react';
import Header from '../views/admin/Header/Header';
import SideNav from '../views/admin/SideNav/SideNav';

const AdminLayout = ({ children }) => (
  <React.Fragment>
    <Header />
    <div className="adminContentBox">
      <SideNav />
      {children}
    </div>
  </React.Fragment>
);

export default AdminLayout;
