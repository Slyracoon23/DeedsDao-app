import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonOutlined } from '../shared/Button';
import { Form } from '../shared/Form';
import { HeroSmall } from '../shared/Layout';
import { breakpoint, device } from '../constants/breakpoints';

const AddPool2 = () => {
  const [ step1Submitted, onStep1Submitted] = useState(false);
  const [ step2Submitted, onStep2Submitted] = useState(false);
  const [ step3Submitted, onStep3Submitted] = useState(false);
  
  const inputsStep1 = [
    { id: 'token-name', value: 'DeedXY', label: 'Token Name', type: 'text' },
    { id: 'ticker-symbol', value: 'USDT', label: 'Ticker symbol', type: 'text' },
    { id: 'total-supply', value: '1000000', label: 'Total Supply', type: 'text' },
    { id: 'percentage-to-unlock', value: '30%', label: 'Percentage of supply needed to unlock NFT-collection', type: 'text' },
    { id: 'description', value: 'Add description...', label: 'Description (optional)', type: 'textarea' },
    { id: 'submit', label: 'Add pool', type: 'submit', action: onStep1Submitted }
  ];

  const inputsStep2  = [
    { id: 'token-name', value: 'DeedXY', label: 'Token Name', type: 'text' },
    { id: 'percentage-to-unlock', value: '30%', label: 'Percentage of supply needed to unlock NFT-collection', type: 'text' },
    { id: 'description', value: 'Add description...', label: 'Description (optional)', type: 'textarea' },
    { id: 'submit', label: 'Add pool', type: 'submit', action: onStep2Submitted }
  ]

  const inputsStep3  = [
    { id: 'token-name', value: 'DeedXY', label: 'Token Name', type: 'text' },
    { id: 'description', value: 'Add description...', label: 'Description (optional)', type: 'textarea' },
    { id: 'submit', label: 'Confirm', type: 'submit', action: onStep3Submitted }
  ]

  return (
    <FullWrapper>
      <HeroSmall>
        <div>
          <ButtonOutlined onClick={() => {}}><Link to="/pool">‹ Back to Deposits</Link></ButtonOutlined>
          <H1Special>Add Pool</H1Special>
        </div>
      </HeroSmall>
      <AddPoolWrapper>
        <div className="steps">
          <div onClick={() => {onStep3Submitted(false); onStep2Submitted(false); onStep1Submitted(false); }} className={`step ${!step1Submitted ? 'active' : ''}`}><div>1</div><p>Choose NFTs</p></div>
          <div onClick={() => {onStep3Submitted(false); onStep2Submitted(false); }} className={`step ${step1Submitted && !step2Submitted ? 'active' : ''}`}><div>2</div><p>Choose token &amp; weights</p></div>
          <div onClick={() => {onStep3Submitted(false); }} className={`step ${step2Submitted && !step3Submitted ? 'active' : ''}`}><div>3</div><p>Confirm pool creation</p></div>
        </div>
        {!step1Submitted && <Form inputs={inputsStep1} />}
        {step1Submitted && !step2Submitted && <Form inputs={inputsStep2} />}
        {step2Submitted && !step3Submitted && <Form inputs={inputsStep3} />}
      </AddPoolWrapper>
  </FullWrapper>
  );
}

const FullWrapper = styled.div`
  ${breakpoint(device.md)} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const AddPoolWrapper = styled.div`
    display: flex;
    padding: 40px;
    justify-content: center;

    ${breakpoint(device.md)} {
      flex-direction: column;
    }

    .steps {
      ${breakpoint(device.md)} {
        display: flex;
        justify-content: space-between;
      }
    }

    .step {
      position: relative;
      display: flex;
      margin-bottom: 26px;

      ${breakpoint(device.md)} {
        flex-direction: column;
        margin: 0 10px 40px 10px;
        align-items: center;
      }

      &.active div {
          background: #744292;
          box-shadow: none;
        }

      &:not(:last-child)::after {
        content: '';
        position: absolute;
        left: 14px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0;
        margin-bottom: 0;
        width: 1px;
        height: 25px;
        background: white;
        top: 30px;

        ${breakpoint(device.md)} {
          content: unset;
        }
      }

      div {
        cursor: pointer;
        box-shadow: 0 0 0 1px #744292;
        border-radius: 50%;
        margin-right: 12px;
        min-width: 30px;
        max-width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px;

        ${breakpoint(device.md)} {
          flex-direction: column;
          margin: 0 0 4px 0;
        }
      }
    }
  }
`;

const H1Special = styled.h1`
  font-size: 20px;
  display: inline;
  margin-left: 24px;
  font-weight: bold;
`;

export default AddPool2;