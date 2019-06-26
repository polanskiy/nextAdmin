import React from 'react';
// import Link from 'next/link';
import { Link } from '../../../routes';

const SideNav = () => (
  <div className="adminSidenavBox">
    <Link href="/admin">
      <a style={{ fontSize: 20 }}>Home</a>
    </Link>
    <Link route="/admin/pages">
      <a>Blogs</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/portfolios">
      <a>Portfolios</a>
    </Link>
    <Link href="/cv">
      <a>CV</a>
    </Link>
  </div>
);

export default SideNav;
