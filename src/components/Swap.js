import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { ContentWrapperInvisible, HeroSmall } from '../shared/Layout';
import { H1Dark, H1DarkSmall } from '../shared/Typography';
import SwapInput from '../shared/SwapInput';
import { TextInput } from '../shared/Form';
import { secondaryColor } from '../constants/theme';
import TokenList from '../shared/TokenList';

const Swap = () => {
  const [ amountFrom, setAmountFrom ] = useState('0.0');
  const [ tokenFrom, setTokenFrom ] = useState('ETH');
  const [ amountTo, setAmountTo ] = useState('0.0');
  const [ tokenTo, setTokenTo ] = useState(null);

  useEffect(() => {
    setFrom({
      label: 'From',
      token: tokenFrom,
      setToken: setTokenFrom,
      amount: amountFrom,
      setAmount: setAmountFrom
    });
  }, [tokenFrom, setTokenFrom, amountFrom, setAmountFrom]);

  useEffect(() => {
    setTo({
      label: 'To',
      token: tokenTo,
      setToken: setTokenTo,
      amount: amountTo,
      setAmount: setAmountTo
    });
  }, [tokenTo, setTokenTo, amountTo, setAmountTo]);
  
  const [ from, setFrom ] = useState({
    label: 'From',
    token: tokenFrom,
    setToken: setTokenFrom,
    amount: amountFrom,
    setAmount: setAmountFrom
  });

  const [ to, setTo ] = useState({
    label: 'To',
    token: tokenTo,
    setToken: setTokenTo,
    amount: amountTo,
    setAmount: setAmountTo
  });

  return (
    <main>
      <HeroSmall>
        <div>
          <H1DarkSmall>Swap</H1DarkSmall>
          Trade without intermediaries through our AMM exchange.
        </div>
      </HeroSmall> 
      <ContentWrapperInvisible>
        <SwapWrapper>
          <SwapInput data={from} />
          <img src={''} alt="" onClick={() => {}} />
          <SwapInput data={to} />
        </SwapWrapper>
      </ContentWrapperInvisible>
    </main>
  )
}

const SwapWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      border-radius: 6px;
      background: #00000059;
      padding: 16px;
      width: 445px;
      height: fit-content;
      margin-bottom: 16px;

    & > div {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 0.75rem 0.75rem 1rem;

      span {
        text-align: center;
        
        p {
          margin-bottom: 8px;
        }
      }
    }
  }
`;

export default Swap;