import React from 'react';
import Header from '../elements/Header/Header';
import SideNav from '../elements/SideNav/SideNav';
import Auth from './Auth';

const AdminLayout = ({ children, slug }) => (
  <>
    <Header />
    <div className="adminContentBox">
      <SideNav slug={slug} />
      <div className="adminContent">
        {children}
      </div>
    </div>
  </>
);

export default Auth(AdminLayout);
