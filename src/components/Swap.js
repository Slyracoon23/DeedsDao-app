import React, { useState } from 'react';
import styled from "styled-components";
import { ContentWrapperInvisible, HeroSmall } from '../shared/Layout';
import { H1Dark, H1DarkSmall } from '../shared/Typography';
import { TextInput } from '../shared/Form';
import { secondaryColor } from '../constants/theme';

const Swap = () => {
  const [ addClicked, setAddClicked ] = useState(false);

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
          <SwapInput label={'From'} value={'0.0'} onChange={() => {}} token={'ETH'} />
          <img src={''} alt="" onClick={() => {}} />
          <SwapInput label={'To'} value={'0.0'} onChange={() => {}} token={null} />
        </SwapWrapper> 
        
      </ContentWrapperInvisible>
    </main>
  )
}

const SwapInput = ({ label, value, onChange, token }) => {
  return (
    <div>
      <span>{label}</span>
        <div>
          <TextInput value={value} onChange={onChange} />
          {token ? (
            <ButtonOutlined>
              <img src="/" alt="" />
              <span>
                {token}
              </span>
              <img src="/" alt="" />
            </ButtonOutlined>
          ) : (
            <ButtonFilled>
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

const Button = styled.button`
  border-radius: 4px;
  height: 40px;
  padding: 4px 8px;
  font-size: 18px;
  color: white;
`

const ButtonFilled = styled(Button)`
  background: ${secondaryColor};
  & > * {
    color: white;
  }
`;

const ButtonOutlined = styled(Button)`
  box-shadow: inset 0 0 0 1px ${secondaryColor};
`;



export default Swap;