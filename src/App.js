import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Pool from './components/Pool';
import AddPool from './components/AddPool';
import Swap from './components/Swap';

const App = () => {
  const [ addClicked, setAddClicked ] = useState(false);

  const pageStyle = { 
    overflow: 'auto',
    height: '100vh',
    marginBottom: 40
  };

  return (
    <div style={pageStyle}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home addClicked={addClicked} setAddClicked={setAddClicked} />} />
        <Route path="/pool" element={<Pool />} />
        <Route path="/add-pool" element={<AddPool />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
    </div>
  );
}

export default App;
