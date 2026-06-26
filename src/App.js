import React from 'react';
import { BrowseRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocks/:symbol" element={<Stocks />} />
    </Routes>

    </BrowseRouter>
    
  
  );
}

export default App;
