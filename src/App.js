import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Pool from './components/Pool';
import AddPool from './components/AddPool';
import Swap from './components/Swap';
import Web3 from 'web3';

const App = () => {
  const [ addClicked, setAddClicked ] = useState(false);
  const [account, setAccount] = useState(); // state variable to set account.

  const pageStyle = { 
    overflow: 'auto',
    height: '100vh',
    marginBottom: 40
  };

  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      
      setAccount(accounts[0]);
    }
    
    load();
   }, []);

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
