import React, { useState } from 'react';
import { ButtonFilled, ButtonOutlined } from '../shared/Button';
import { TextInput } from '../shared/Form';
import TokenList from '../shared/TokenList';

const SwapInput = ({ data }) => {
  const { label, token, amount, setAmount, setToken } = data;
  const [ isChangeToken, setChangeToken ] = useState(true);

  console.log(isChangeToken);

  return (
    <div>
      {isChangeToken && <TokenList setToken={setToken} />}
      <span>{label}</span>
        <div>
          <TextInput value={amount} onChange={e => setAmount(e.target.value)} />
          {token ? (
            <ButtonOutlined onClick={() => {
              console.log(1); 
              this.setChangeToken(true);
            }}>
              <img src="/" alt="" />
              <span>
                {token}
              </span>
              <img src="/" alt="" />
            </ButtonOutlined>
          ) : (
            <ButtonFilled onClick={() => {console.log(1); this.setChangeToken(true)}}>
              <span>
                Select Token
              </span>
              <img src="/" alt="" />
            </ButtonFilled>
          )}
        </div>
    </div>
  );
}

export default SwapInput;