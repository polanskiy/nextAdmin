import React from 'react';
import Link from 'next/link';

const SideNav = () => (
  <div className="sidenavBox">
    <Link href="/">
      <a style={{ fontSize: 20 }}>Home</a>
    </Link>
    <Link href="/blogs">
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
