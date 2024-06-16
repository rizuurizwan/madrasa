import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './app/auth/login/login';
import Main from './app/main/main';
import Dashboard from './app/module/admin/dashboard';
import MadrasaList from './app/module/admin/madrasalist';
import MadrasaDetails from './app/module/admin/madrasasetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Studentlist from './app/module/user/studentlist';
import Studentdetail from './app/module/user/studentdetail';
import Users from './app/module/admin/Users';
import PrivateRoutes from './app/_utilities/PrivateRoutes';
import Userslist from './app/module/admin/UsersList';
function App() {
  return (
    <Router>
      <Routes>
        {/* Ensure that the login route is not protected */}
        <Route path="" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* Protect the main route */}
        <Route element={<PrivateRoutes />}>
          <Route path="/main" element={<Main />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="madrasalist" element={<MadrasaList />} />
            <Route path="madrasadetails" element={<MadrasaDetails />} />
            <Route path="studentlist" element={<Studentlist />} />
            <Route path="studentdetail" element={<Studentdetail />} />
            <Route path="users" element={<Users />} />
            <Route path="userslist" element={<Userslist />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
