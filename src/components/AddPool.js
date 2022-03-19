import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonOutlined } from '../shared/Button';
import { TextInput, Form, ButtonSubmit } from '../shared/Form';
import { HeroSmall } from '../shared/Layout';
import { breakpoint, device } from '../constants/breakpoints';
import { tokenList } from '../constants/mockup-data';
import NftList from '../shared/NftList';
import { Toast } from '../shared/Toast';
import PoolSummary from "./../shared/PoolSummary";

const AddPool2 = () => {
  const [ step1Submitted, onStep1Submitted ] = useState(false);
  const [ step2Submitted, onStep2Submitted ] = useState(false);
  const [ step3Submitted, onStep3Submitted ] = useState(false);

  const onChange = () => {};

  return (
    <AddPoolWrapper>
      <HeroSmall>
        <div>
          <ButtonOutlined onClick={() => {}}><Link to="/pool">‹ Back to Deposits</Link></ButtonOutlined>
          <H1Special>Add Pool</H1Special>
        </div>
      </HeroSmall>
      <div className="content">
        <div className="steps">
          <div onClick={() => {onStep3Submitted(false); onStep2Submitted(false); onStep1Submitted(false); }} className={`step ${!step1Submitted ? 'active' : ''}`}><div>1</div><p>Choose NFTs</p></div>
          <div onClick={() => {onStep3Submitted(false); onStep2Submitted(false); }} className={`step ${step1Submitted && !step2Submitted ? 'active' : ''}`}><div>2</div><p>Choose token &amp; weights</p></div>
          <div onClick={() => {onStep3Submitted(false); }} className={`step ${step2Submitted && !step3Submitted ? 'active' : ''}`}><div>3</div><p>Confirm pool creation</p></div>
        </div>
        {!step1Submitted && <NftList onSubmit={onStep1Submitted} />}
        {step1Submitted && !step2Submitted && (
          <Step2>
            <Toast message={(<p>Congrats! Your NFTs got fractionalized! <span role="img" aria-label="">🎉</span></p>)} />
            <table>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Weight</th>
                  <th>Supply</th>
                </tr>
              </thead>
              <tbody>
                {tokenList.map(t => (
                  <tr key={t.idx}>
                    <td className="title"><TextInput onChange={onChange} value={t.name} /></td>
                    <td><TextInput onChange={onChange} value={'25%'} /></td>
                    <td><TextInput onChange={onChange} value={'1.000.000'} /></td>
                  </tr>
                ))}
                <tr>
                  <td className="title"><TextInput onChange={onChange} value={'ETH'} /></td>
                  <td><TextInput onChange={onChange} value={'25%'} /></td>
                  <td><TextInput onChange={onChange} value={'1'} /></td>
                </tr>
              </tbody>
            </table>
            <ButtonSubmit onClick={() => onStep2Submitted(true)} label="Confirm" />
          </Step2>
        )}
        {step2Submitted && !step3Submitted && (
          <Step3>
           <PoolSummary whenAddingPool={true} />
           <ButtonSubmit onClick={() => onStep3Submitted(true)} label="Create Pool" />
          </Step3>
        )}
      </div>
  </AddPoolWrapper>
  );
}

const Step3 = styled.div`
  margin-left: 20px;

  ${breakpoint(device.lg)} {
    margin: 0;
  }
`;

const Step2 = styled.div`
  margin-left: 20px;

  ${breakpoint(device.lg)} {
    margin: 0;
  }

  table {
    margin-left: -8px;

    ${breakpoint(device.lg)} {
      margin-left: -32px;
      width: calc(100% + 64px);
    }
    
    th {
      text-align: left;
      padding: 0 8px 8px 8px;
    }

    td {
      width: 33%;
      padding: 8px;

      .title {
        font-weight: bold;
      }

      & > div, input {
        width: 100%;
      }
    }
  }

  .button-wrapper {
    ${breakpoint(device.lg)} {
      margin-left: -24px;
    }
  }
`;

const AddPoolWrapper = styled.div`
  ${breakpoint(device.lg)} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content {
    display: flex;
    padding: 40px;
    justify-content: center;

    ${breakpoint(device.lg)} {
      flex-direction: column;
    }

    .steps {
      ${breakpoint(device.lg)} {
        display: flex;
        justify-content: space-between;
      }

      .step {
        position: relative;
        display: flex;
        margin-bottom: 26px;

        p {
          white-space: nowrap;
        }

        ${breakpoint(device.lg)} {
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

          ${breakpoint(device.lg)} {
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

          ${breakpoint(device.lg)} {
            flex-direction: column;
            margin: 0 0 4px 0;
          }
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