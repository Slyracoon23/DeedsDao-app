import React from 'react';

const TokenList = () => {
  const tokens = [
    {symbol: 'ABC', label: 'ABC Coin'},
    {symbol: 'BCD', label: 'BCD Coin'},
    {symbol: 'CBD', label: 'CBD Coin'}
  ]
  return (
    <ul>
      {tokens.map((t, idx) => (
        <li key={idx}>{t.symbol}</li>
      ))}
    </ul>
  )
}

export default TokenList;