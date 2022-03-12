import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from './components/Home';
import Header from './components/Header';
import AddNewDeed from './components/AddNewDeed';

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
        <Route path="/new-deed" element={<AddNewDeed />} />
      </Routes>
    </div>
  );
}

export default App;
