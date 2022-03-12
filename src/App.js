import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from './components/Home';
import Header from './components/Header';
import AddNewDeed from './components/AddNewDeed';
import { discord, docs } from './constants/icons';

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
      <LinksWrapper>
        <a target="_blank" rel="noopener noreferrer" href="https://app.gitbook.com/o/9s1HWmu67VMunIKY0cOc/s/ntM5l4suiGLNXTWUeHAb/">
          <img src={docs} alt="Docs" />
          Documentation
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://app.gitbook.com/o/9s1HWmu67VMunIKY0cOc/s/ntM5l4suiGLNXTWUeHAb/">
        <img src={discord} alt="Discord" />
          Discord
        </a>
      </LinksWrapper>
      <Routes>
        <Route path="/" element={<Home addClicked={addClicked} setAddClicked={setAddClicked} />} />
        <Route path="/new-deed" element={<AddNewDeed />} />
      </Routes>
    </div>
  );
}


const LinksWrapper = styled.div`
  max-width: fit-content;
  margin: 30px auto;
  padding: 20px;
  background: #00000059;
  border-radius: 4px;

  a {
    color: white;
    display: inline-flex;
    align-items: center;

    img {
      margin-right: 8px;
    }

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;


export default App;
