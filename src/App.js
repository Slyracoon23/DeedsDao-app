import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import Home from './components/Home';
import Header from './components/Header';
import Pool from './components/Pool';
import AddPool from './components/AddPool';
import Swap from './components/Swap';
import { breakpoint, device } from './constants/breakpoints';

const App = () => {
  const [ addClicked, setAddClicked ] = useState(false);
  const [ mobileOpen, setMobileOpen ] = useState(false);
  const isMobile = useMediaQuery(breakpoint(device.lg));

  useEffect(() => {
    if (mobileOpen && !isMobile) {
      setMobileOpen(false);
    }

  }, [isMobile, mobileOpen])
 
  const pageStyle = { 
    overflow: isMobile && mobileOpen ? 'hidden' : 'auto',
    height: '100vh',
    marginBottom: 40
  }; 

  return (
    <div style={pageStyle}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      {/* <SwapWidget
          provider={account.provider}
          JsonRpcEndpoint={jsonRpcEndpoint} /> */}
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
