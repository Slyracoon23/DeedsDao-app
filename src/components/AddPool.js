import React from 'react';
import { Form } from '../shared/Form';
import { Link } from "react-router-dom";
import { ContentWrapperInvisible, HeroSmall } from '../shared/Layout';
import { ButtonOutlined } from '../shared/Button';
import { H1DarkSmall } from '../shared/Typography';
import styled from "styled-components";


const AddPool = () => {
  const inputs = [
    { id: 'token-name', value: 'DeedXY', label: 'Token Name', type: 'text' },
    { id: 'ticker-symbol', value: 'USDT', label: 'Ticker symbol', type: 'text' },
    { id: 'total-supply', value: '1000000', label: 'Total Supply', type: 'text' },
    { id: 'percentage-to-unlock', value: '30%', label: 'Percentage of supply needed to unlock NFT-collection', type: 'text' },
    { id: 'description', value: 'Add description...', label: 'Description (optional)', type: 'textarea' },
    { id: 'submit', label: 'Add pool', type: 'submit' }
  ]

  return (
    <>
      <HeroSmall>
        <div>
          <ButtonOutlined onClick={() => {}}><Link to="/pool">‹ Back</Link></ButtonOutlined>
          <H1Special>Add Pool</H1Special>
        </div>
      </HeroSmall> 
      <ContentWrapperInvisible>
        <Form inputs={inputs} />
      </ContentWrapperInvisible>
  </>
  );
}

const H1Special = styled.h1`
  font-size: 20px;
  display: inline;
  margin-left: 24px;
  font-weight: bold;
`;

export default AddPool;