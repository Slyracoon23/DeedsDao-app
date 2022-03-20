import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import styled from "styled-components";
import { ButtonSubmit } from '../shared/Form';
import { Toast } from '../shared/Toast';
import { nftList } from '../constants/mockup-data';
import { check } from '../constants/icons';
import UniclyFactory from '../abi/UniclyFactory.json';
import { breakpoint, device } from '../constants/breakpoints';

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
    const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
    const uniclyContract = new ethers.Contract(contractAddress, UniclyFactory.abi, signer);

    uniclyContract.createUToken(1000, 18, 'Star Wars', 'uStar', 950, 'Leia')
      .then(e => onSubmit(true))
      .catch(e => setTransactionFailed(e.message));
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