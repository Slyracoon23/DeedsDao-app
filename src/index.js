import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import './scss/styles.scss';

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
      >
        <App />
      </ThirdwebWeb3Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
