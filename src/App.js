import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Pool from './components/Pool';
import AddPool from './components/AddPool';
import Swap from './components/Swap';
import { providers, ethers } from 'ethers';
import { SwapWidget } from '@uniswap/widgets';

const infuraId = 'cd709467179a42d08da14769f353922e';
const jsonRpcEndpoint = `https://mainnet.infura.io/v3/${infuraId}`;
// const jsonRpcProvider = new providers.JsonRpcProvider(jsonRpcEndpoint);
// const provider = new ethers.providers.Web3Provider(jsonRpcProvider);

const App = () => {
  const [ addClicked, setAddClicked ] = useState(false);
  const [ mobileOpen, setMobileOpen ] = useState(false);
 
  const pageStyle = { 
    overflow: 'auto',
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
