import React, { useState } from 'react';
import './App.css';
import {Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet} from "react-router-dom";

import Layout from "./components/Layout";
import NoPage from "./components/Nopage";
import Home from "./components/Home";
import Mypage from "./components/MYpage";
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
            <Route path="mypage" element={<Mypage />} />
            <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
