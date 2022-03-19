import React from 'react'
import styled from "styled-components";
import { ButtonSmallFilled, ButtonSmallOutlined } from '../shared/Button';
import { secondaryColor } from '../constants/theme';
import { nftList } from '../constants/mockup-data';
import { Link } from "react-router-dom";

const ethIcon = 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png';

const PoolSummary = ({ noActions, whenAddingPool, pool }) => (
  <StyledPoolSummary whenAddingPool={whenAddingPool} className="pool">
    <div>
      {nftList.map(n => (
        <div key={n.idx}>
          <p>{n.name}</p>
          <div className="img-wrapper">
            <div className="img" style={{ background: `url(${n.img_src}) center/cover` }} alt="" />
          </div> 
          <div className="stats">
            <div>
              <span>Total Supply</span>
              <span>{n.total_supply}</span>
            </div>
            {whenAddingPool && (
               <div>
               <span>Weight</span>
               <span>25%</span>
             </div>
            )}
            {!noActions && !whenAddingPool && (
              <div className="me">
                <span>Your Holdings</span>
                <span>{n.your_holdings}</span>
              </div>
              )}
          </div>
        </div>
      ))}
      <div>
        <p>ETH</p>
          <div className="img-wrapper">
            <div className="img" style={{ background: `url(${ethIcon}) center/cover` }} alt="" />
          </div> 
          <div className="stats">
            <div>
              <span>Total Supply</span>
              <span>10</span>
            </div>
            {whenAddingPool && (
                <div>
                <span>Weight</span>
                <span>25%</span>
              </div>
            )}
            {!noActions && !whenAddingPool && (
              <div className="me">
                <span>Your Holdings</span>
                <span>1</span>
              </div>
              )}
          </div>
      </div>
    </div>
  </StyledPoolSummary>
);

const StyledPoolSummary = styled.div`
  .ticker {
    font-size: 20px;
    padding: 20px 0 12px 20px;
    color: ${secondaryColor};
  }

  & > div {
    display: flex;
    justify-content: space-between;
    margin-left: -8px;
    min-width: 850px;

     & > div {
       width: 33%;
       margin: ${props => props.whenAddingPool ? '12px' : '12px 20px'};
     }

    p {
      font-weight: bold;
      padding: 0 0 8px;
      text-align: center;
    }

    .img-wrapper {
      display: flex;
      justify-content: center;

      .img {
        width: 80px;
        height: 80px;
        border-radius: 4px;
      }
    }

    .stats {
      padding: 4px 10px;
      line-height: 2;
      background: #4a365e;
      margin-top: 20px;
      border-radius: 4px;

      &  > div {
        display: flex;
        justify-content: space-between;
        white-space: nowrap;

        &.me {
          font-weight: bold;
        }
      }
    }
  }
`;

export default PoolSummary;