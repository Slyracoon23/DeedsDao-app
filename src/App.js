import React, { useState } from 'react';
import Home from './components/Home';
import Team from './components/Team';
import Marketplace from './components/Marketplace';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const pageStyle = { 
    overflow: mobileOpen ? 'hidden' : null,
    height: mobileOpen ? '100vh' : null
  };

  return (
    <div style={pageStyle}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="marketplace" element={<Marketplace />} />
      </Routes>
    </div>
  );
}

export default App;
