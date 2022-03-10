import React from 'react';
import { Form } from '../shared/Form';
import { H2Light } from '../shared/Typography';
import styled from "styled-components";

const AddNewDeed = () => {
  const inputs = [
    { id: 'token-name', value: 'DeedXY', label: 'Token Name', type: 'text' },
    { id: 'ticker-symbol', value: 'USDT', label: 'Ticker symbol', type: 'text' },
    { id: 'total-supply', value: '1000000', label: 'Total Supply', type: 'text' },
    { id: 'percentage-to-unlock', value: '30%', label: 'Percentage of supply needed to unlock NFT-collection', type: 'text' },
    { id: 'description', value: 'Add description...', label: 'Description (optional)', type: 'textarea' },
    { id: 'submit', label: 'Add deed', type: 'submit' }
  ]

  return (
    <>
      <Form inputs={inputs} />
    </>
  )
}

export default AddNewDeed;