import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Menu from '../layout/menu';
import themeFile from '../_services/theme.json';
const Main = () => {

  const color = sessionStorage.getItem('themes');

  // const themeData = {
  //   data: [
  //     {
  //       id: 1,
  //       name: "Black",
  //       themecolor: "radial-gradient(circle at 10% 20%, rgb(87, 108, 117) 0%, rgb(37, 50, 55) 100.2%)",
  //       header: "rgb(87, 108, 117)"
  //     },
  //     {
  //       id: 2,
  //       name: "Pink",
  //       themecolor: "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)",
  //       header: "#c471f5"
  //     },
  //     {
  //       id: 3,
  //       name: "Blue",
  //       themecolor: "linear-gradient(179.2deg, rgb(21, 21, 212) 0.9%, rgb(53, 220, 243) 95.5%)",
  //       header: "rgb(21, 21, 212)"
  //     },
  //     {
  //       id: 4,
  //       name: "Green",
  //       themecolor: "radial-gradient(circle at 10% 20%, rgb(4, 159, 108) 0%, rgb(194, 254, 113) 90.1%)",
  //       header: "rgb(4, 159, 108)"
  //     },
  //     {
  //       id: 5,
  //       name: "Orange",
  //       themecolor: "radial-gradient(circle at 10% 20%, rgba(239, 87, 87, 0.74) 0%, rgba(245, 123, 13, 0.74) 90.2%)",
  //       header: "rgba(239, 87, 87, 0.74)"
  //     }
  //   ]
  // };
  const themeData = themeFile.themeData;
  const selectedTheme = themeData.find(theme => theme.id === parseInt(color));
  if (selectedTheme) {
      document.documentElement.style.setProperty('--themecolr1', selectedTheme.themecolor);
      document.documentElement.style.setProperty('--themecolr2', selectedTheme.header);
  }

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
