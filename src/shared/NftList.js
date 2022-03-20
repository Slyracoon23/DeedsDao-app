import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import styled from "styled-components";
import { ButtonSubmit } from '../shared/Form';
import { Toast } from '../shared/Toast';
import { nftList } from '../constants/mockup-data';
import { check } from '../constants/icons';
import UniclyFactory from '../abi/UniclyFactory.json';
import WeightedPoolFactory from '../abi/WeightedPoolFactory.json';
import { breakpoint, device } from '../constants/breakpoints';
import { fp, toNormalizedWeights } from '../constants/helper-numbers';
import { BigNumber } from 'ethers';

const NftList = ({ onSubmit }) => {
  const [ selectedNfts, setSelectedNfts ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ fracStarted, setFracStarted ] = useState(false);
  const [ transactionFailed, setTransactionFailed ] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    return () => {
      setFracStarted(false);
      setTransactionFailed(false);
    }
  }, [])

  const handleSelectedNfts = (idx) => {
    if (!selectedNfts.includes(idx)) {
      setSelectedNfts([...selectedNfts, idx]);
    } else {
      setSelectedNfts(selectedNfts.filter(s => s !== idx));
    }
  }

  const fractionalizeNfts = async () => {
    setFracStarted(true);
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = provider.getSigner();
    const contractAddressUnicly = '0x8a791620dd6260079bf849dc5567adc3f2fdc318';
    const contractAddressWeightedPool = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707';

    const wETH = '0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0';
    
    const uniclyContract = new ethers.Contract(contractAddressUnicly, UniclyFactory.abi, signer);

    uniclyContract.createUToken(1000, 18, 'Star Wars', 'uStar', 950, 'Leia')
      .then(e => onSubmit(true))
      .catch(e => setTransactionFailed(e.message));

    const tokenAdress1 = uniclyContract.uTokens(0); // string

    const weightedPoolContract = new ethers.Contract(contractAddressWeightedPool, WeightedPoolFactory.abi, signer);
    const NAME = 'dPunk-dMeebit-dApe';
    const SYMBOL = 'dPunk-dMeebit-dApe';
    const WEIGHTS = toNormalizedWeights([fp(30), fp(70), fp(5), fp(5)]);
    const POOL_SWAP_FEE_PERCENTAGE = fp(0.01);
    const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
    const tokens = {
      addresses: [wETH]
    };




    weightedPoolContract.create(NAME, SYMBOL, [
      '0x0B306BF915C4d645ff596e518fAf3F9669b97016',
      '0x9A676e781A523b5d0C0e43731313A708CB607508'
    ], WEIGHTS, POOL_SWAP_FEE_PERCENTAGE, ZERO_ADDRESS);
  }

  return (
    <StyledNftList>
      {fracStarted && (
        <Toast type="info" message={(<p>Please confirm MetaMask transaction to fractionalize your NFTs!</p>)} />
      )}
      {transactionFailed && (
        <Toast type="error" message={'Transaction failed: ' + transactionFailed} />
      )}
      <p>Your NFTs</p>
      <div className="list">
        {loading && (
          <span>loading...</span>
        )}
        {!loading && nftList.map(n => (
          <div 
            key={n.idx}
            className={'img ' + (selectedNfts.includes(n.idx) ? 'selected' : '')}
            onClick={e => handleSelectedNfts(n.idx)}
            style={{ background: `url(${n.img_src}) center/cover` }} 
            alt=""
          >
            {selectedNfts.includes(n.idx) && (
              <img src={check} alt="" />
            )}
          </div>
        ))}
      </div>
      {!loading && (
        <ButtonSubmit
          style={{width: '33%'}}
          onClick={fractionalizeNfts} 
          disabled={selectedNfts.length === 0} 
          label="Fractionalize NFTs" />
      )}
    </StyledNftList>
  );
}

const StyledNftList = styled.div`
  margin-left: 20px;

  ${breakpoint(device.md)} {
    margin: 0;
  }

  & > p {
    font-size: 20px;
    margin-bottom: 12px;
    font-weight: bold;
  }

  .list {
    display: inline-flex;
    background: #00000060;
    padding: 20px;
    border-radius: 4px;

    .img {
      width: 80px;
      height: 80px;
      background-position: cover;
      position: relative;
      border-radius: 4px;
      user-select: none;

      &:not(:last-child) {
        margin-right: 20px;
      }

      &.selected {
        padding: 8px;
        box-shadow: 0 0 0 4px #41ad49;
        
        img {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 24px;
        }
      }
    }
  }
`;

export default NftList;