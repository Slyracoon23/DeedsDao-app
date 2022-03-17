import React from 'react'
import styled from "styled-components";
import { ButtonSmallFilled, ButtonSmallOutlined } from '../shared/Button';
import { breakpoint, device } from '../constants/breakpoints';
import { poolList } from '../constants/mockup-data';
import { Link } from "react-router-dom";

const StyledPoolList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  &.no-actions {
    .header, .items > div {
      grid-template-columns: 1fr 2fr 2fr 2fr;
    }
  }

  .header {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 2fr 3fr;
    padding: 0px 16px;
    margin-bottom: 8px;
    padding: 20px;
    border-radius: 4px;
    background: #55a4d8;

    span {
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
    background: #00000061;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 2px;
    padding: 12px 16px;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 2fr 3fr;

    span {
      &.title {
      font-weight: bold;
      }

      &:not(.title) {
        text-align: right;
      }
    }

    &:not(:last-child) {
      margin-bottom: 8px;
    }

    ${breakpoint(device.lg)} {
      min-width: unset;
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
      align-self: center;

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

const PoolList = ({items, withAddPool, noActions}) => (
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
    {poolList.map(i => ( // change back to items.map() once we have actual data
      <div key={i.idx}>
        <span className="title">{i.symbol}</span>
        <span>{i.price}</span>
        <span>{i.market_cap}</span>
        <span>{i.liquidity}</span>
        {!noActions && (
          <div className="buttons-wrapper">
            {i.redeemable && <ButtonSmallFilled>Redeem</ButtonSmallFilled>}
            <ButtonSmallOutlined>Withdraw</ButtonSmallOutlined>
          </div>
        )}
      </div>
      ))}
    </div>
  </StyledPoolList>
);



export { PoolList };