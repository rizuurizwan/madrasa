import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faUser, faGear, faUndo, faSignOut } from '@fortawesome/free-solid-svg-icons';
import SidebarToggle from './sidebartoggle';

const Navbar = () => {
  debugger;
  const navigate = useNavigate();

  const userdata = JSON.parse((localStorage.getItem('data')));
  const username = userdata.username;

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <>
      <SidebarToggle /> {/* Include SidebarToggle component */}
      <nav className="sb-topnav navbar navbar-expand navbar-dark gradient-custom">
        {/* Sidebar Toggle */}
        <button className="btn btn-link btn order-0 order-lg-0 bb_0" id="sidebarToggle" href="#!">
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
        </button>

        {/* Navbar Brand */}
        <Link className="navbar-brand" to="/dashboard">
          <i className="top_logo"></i>
        </Link>

        <div className="client_logo_con hid-sm">
          <i className="client_logo d-none"></i>
          <span className="comp_name">மஜ்லிசுல் மாதரிஸில் அரபிய்யா தமிழ்நாடு</span>
        </div>

        {/* Navbar */}
        <ul className="navbar-nav ms-auto ms-md-0 position-absolute r-0">
          <li className="nav-item d-none">
            <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Vouchers" href="#">
              <FontAwesomeIcon icon={faBell} />
              <span className="notif">5</span>
            </a>
          </li>
          <li className="nav-item lang d-none">
            <a className="nav-link" href="#">عربى</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="p-2 hid-sm">{username}</span>
              <FontAwesomeIcon icon={faUser} />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item">
                  <FontAwesomeIcon icon={faGear} style={{ color: 'black' }} /><span className='mrgnlft10'>அமைப்புகள்</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" >
                  <FontAwesomeIcon icon={faUndo} style={{ color: 'black' }} /><span className='mrgnlft10'>கடவுச்சொல்லை மீட்டமைக்க</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOut} style={{ color: 'black' }} /><span className='mrgnlft10'>வெளியேறு</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
