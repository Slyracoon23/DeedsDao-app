import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { ButtonSubmit } from '../shared/Form';
import { nftList } from '../constants/mockup-data';
import { check } from '../constants/icons';
import { breakpoint, device } from '../constants/breakpoints';

const NftList = ({ onSubmit }) => {
  const [ selectedNfts, setSelectedNfts ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [])

  const handleSelectedNfts = (idx) => {
    if (!selectedNfts.includes(idx)) {
      setSelectedNfts([...selectedNfts, idx]);
    } else {
      setSelectedNfts(selectedNfts.filter(s => s !== idx));
    }
  }

  return (
    <StyledNftList>
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
      {!loading && <ButtonSubmit onClick={() => setTimeout(() => onSubmit(true), 500)} disabled={selectedNfts.length === 0} label="Fractionalize NFTs" />}
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