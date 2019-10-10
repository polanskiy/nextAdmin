import React from 'react';
import Head from 'next/head';
import Header from '../elements/Header/Header';
import SideNav from '../elements/SideNav/SideNav';
import Auth from './Auth';

const AdminLayout = ({ children, slug }) => (
  <>
    <Head>
      <script src="/static/tinymce.min.js" />
    </Head>
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
