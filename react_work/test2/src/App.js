import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import GoodsUpload from './GoodsUpload/GoodsUpload';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoodsUpload />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
