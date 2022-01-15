import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import GoodsUpload from './components/GoodsUpload/GoodsUpload';
import GoodsBoard from './components/GoodsBoard/GoodsBoard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoodsUpload />} />
        <Route path="/goodsboard" element={<GoodsBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
