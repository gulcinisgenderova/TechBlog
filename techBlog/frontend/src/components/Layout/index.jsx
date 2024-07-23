import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = () => {
  const location = useLocation();
  const noNavFooterPaths = ['/login', '/register'];

  return (
    <div>
      {!noNavFooterPaths.includes(location.pathname) && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!noNavFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default Layout;
