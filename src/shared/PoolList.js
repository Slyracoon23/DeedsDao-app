import React, { useState } from 'react'
import styled from "styled-components";
import { ButtonSmallOutlined, ButtonSmallPrimaryOutlined, ButtonSmallPrimaryFilled } from '../shared/Button';
import PoolSummary from '../shared/PoolSummary';
import { breakpoint, device } from '../constants/breakpoints';
import { poolList } from '../constants/mockup-data';
import { Link } from "react-router-dom";

const PoolList = ({items, withAddPool, noActions}) => {
  const [ summaryOpen, setSummaryOpen ] = useState(false);
  const [ summaryIdx, setSummaryIdx ] = useState(false);

  const toggleSummaryOpen = (idx) => {
    setSummaryOpen(!summaryOpen);
    setSummaryIdx(idx);
  }

  return (
    <StyledPoolList className={noActions ? 'no-actions' : ''}>
      <div className="header">
        <span className="title">Symbol</span>
        <span>Price</span>
        <span>Market Cap</span>
        <span>Liquidity</span>
        {!noActions && (<span>&nbsp;</span>)}
      </div>
      <div className="items">
      {withAddPool && (
        <div className="add-item">
          <ButtonSmallOutlined onClick={() => {}}><Link to="/add-pool">Add Pool</Link></ButtonSmallOutlined>
        </div>
      )}
      {poolList.map(p => ( // change back to items.map() once we have actual data
        <React.Fragment key={p.idx}>
          <div onClick={() => toggleSummaryOpen(p.idx)}>
            <span className="title">{p.symbol}</span>
            <span>{p.price}</span>
            <span>{p.market_cap}</span>
            <span>{p.liquidity}</span>
          </div>
          <div className={'summary ' + (summaryOpen && summaryIdx === p.idx ? 'open' : '')}>
            <PoolSummary noActions={noActions} pool={p}></PoolSummary>
            <div className="buttons-wrapper">
              {p.redeemable && <ButtonSmallPrimaryFilled>Redeem</ButtonSmallPrimaryFilled>}
              <ButtonSmallPrimaryOutlined onClick={() => {}}>Withdraw</ButtonSmallPrimaryOutlined>
              <ButtonSmallPrimaryOutlined onClick={() => {}}>Swap</ButtonSmallPrimaryOutlined>
            </div>
          </div>
        </React.Fragment>
        ))}
      </div>
    </StyledPoolList>
  )
}


const StyledPoolList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  &.no-actions {
    .header, .items > div {
      grid-template-columns: 2fr 2fr 2fr 2fr;
    }
  }

  .header {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr;
    padding: 0px 16px;
    margin-bottom: 8px;
    padding: 20px;
    border-radius: 4px;
    background: #55a4d8;

    span {
      margin: auto 0;
      height: 8px;

      &.title {
      font-weight: bold;
      }

      &:not(.title) {
        text-align: right;
      }
    }
  }

  .items > div {
    width: 100%;
    min-width: 887px;
    height: 100px;
    background: #00000060;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 2px;
    padding: 12px 16px;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr;
    user-select: none;
    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 8px;
    }

    ${breakpoint(device.lg)} {
      min-width: unset;
    }

    span {
      margin: auto 0;

      &.title {
      font-weight: bold;
      }

      &:not(.title) {
        text-align: right;
      }
    }

    &.summary {
      display: block;
      max-height: 0;
      height: auto;
      padding: 0;
      background: #00000030;
      transition: all 0s ease;

      &:not(.open) > * {
        display: none;
      }

      &.open {
        padding: 12px 16px;
      transition: all 0.7s ease;

        max-height: 1000px; // a value that the content should never be able to reach
      }

      & > div {
        margin-bottom: 20px;
      }

      .buttons-wrapper {
        button:not(:last-child) {
          margin-right: 12px;
        }
      }
    }
   
    &.add-item {
      background: transparent;
      width: 100%;
      height: 50px;
      margin: -8px 0 0 0;
      box-shadow: none;
      display: flex;
      justify-content: center;
    }

    & > * {
      &.buttons-wrapper {
        margin-left: 16px;
        display: flex;
        justify-content: center;

        button:not(:last-child) {
          margin-right: 8px;
        }
      }
    }
  }
`;

export default PoolList;