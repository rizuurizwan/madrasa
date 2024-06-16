import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Menu from '../layout/menu';

const Main = () => {
  return (
    <div>
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Menu />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
