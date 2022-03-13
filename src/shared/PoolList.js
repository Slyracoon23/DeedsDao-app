import React from 'react'
import styled from "styled-components";
import { ButtonFilled, ButtonOutlined } from '../shared/Button';
import { secondaryColor  } from '../constants/theme';
import { poolList } from '../constants/mockup-data';
import { Link } from "react-router-dom";

const StyledPoolList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  .header {
    display: grid;
    grid-template-columns: 4fr 3fr 3fr 3fr 3fr;
    padding: 0px 16px;
    margin-bottom: 16px;
    padding: 20px;
    border-radius: 4px;
    background: #55a4d8;
  }

  .items > div {
    width: 100%;
    min-width: 1008px;
    height: 100px;
    background: #00000061;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 2px;
    padding: 12px 16px;
    display: grid;
    grid-template-columns: minmax(0px, 4fr) 3fr 3fr 3fr 3fr;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    &.add-item {
      background: transparent;
      width: 100%;
      margin: -8px 0 2px 0;
      box-shadow: none;
    }

    & > * {
      align-self: center;

      &.buttons-wrapper {
        button:not(:last-child) {
          margin-right: 8px;
        }
      }
    }
  }
`;

const PoolList = ({items, withAddPool, noActions}) => (
  <StyledPoolList>
    <div className="header">
      <span>Symbol</span>
      <span>Price</span>
      <span>Market Cap</span>
      <span>Liquidity</span>
      <span>&nbsp;</span>
    </div>
    <div className="items">
    {withAddPool && (
      <div className="add-item">
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <ButtonOutlined onClick={() => {}}><Link to="/add-pool">Add Pool</Link></ButtonOutlined>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    )}
    {poolList.map(i => ( // change back to items.map() once we have actual data
      <div key={i.idx}>
        <span>{i.symbol}</span>
        <span>{i.price}</span>
        <span>{i.market_cap}</span>
        <span>{i.liquidity}</span>
        {!noActions && (
          <div className="buttons-wrapper">
            {i.redeemable && <ButtonFilled>Redeem</ButtonFilled>}
            <ButtonOutlined>Withdraw</ButtonOutlined>
          </div>
        )}
      </div>
      ))}
    </div>
  </StyledPoolList>
);



export { PoolList };