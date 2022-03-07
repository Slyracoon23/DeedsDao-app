import React from 'react';
import styled from "styled-components";
import { ContentWrapper, SectionLight, SectionDark } from '../shared/Layout';
import { H2Light } from '../shared/Typography';
import { primaryColor } from '../constants/theme';
import { defaultImages } from '../constants/mockup-data';

const Marketplace = () => {
  return (
    <main>
      <SectionLight>
        <ContentWrapper>
          <H2Light>Marketplace</H2Light>
          <p>An overview of all NFTs and securities in the DeedsDAO ecosystem.</p>
          </ContentWrapper>
        </SectionLight>
        <SectionDark>
          <CardsWrapper>
          {defaultImages.map((s, idx) => (
            <div key={idx} className="card">
              <div>
                <span className="img-wrapper">
                  <div className="img" style={{background: 'url(' + s + ') center center / cover'}}></div>
                </span>
              </div>
              <h4>The Graph</h4>
              <p>The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.</p>
              <div className="button-wrapper"><button><span>99$</span></button></div>
            </div>
          ))}
          </CardsWrapper>
      </SectionDark>
    </main>
  )
}

const CardsWrapper = styled.div`
  display: flex;
  margin: 24px auto 0 auto;
  flex-wrap: wrap;
  justify-content: center;

  .card {
    padding: 24px;
    background: linear-gradient(0,#e55be15c,transparent);
    border-radius: 12px;
    margin: 12px;
    max-width: 240px;
    transition: all 0.3s ease;
    box-shadow: 0 0 0 2px ${primaryColor};

    &:hover {
      box-shadow: 0 0 0 4px ${primaryColor};

      .img {
        transform: scale(1.35);
      }

      button {
        transform: scale(1.05);
      }
    }

    & > div {
      display: flex;
      justify-content: center;
      
      .img-wrapper {
        padding: 10px;
        border-radius: 10px;
        background: rgb(255 255 255 / 5%);

        .img {
          border-radius: 4px;
          width: 86px;
          height: 60px;
          background-size: cover;
          transition: all 0.5s ease;
        }
      }
    }

    h4 {
      margin-top: 16px;
    }

    p {
      margin: 8px 0 24px 0;
      font-size: 14px;
      line-height: 1.25em;
      color: #ad7fd9db;
    }

    .button-wrapper {
      display: flex;
      align-items: center;
      margin-top: 16px;

      button {
        transition: all 0.5s ease;
        border-radius: 4px;
        color: white;
        height: 32px;
        width: 120px;
        background: ${primaryColor};
        cursor: pointer;
        position: relative;

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          visibility: hidden;
          border-radius: 4px;
          border: 2px solid transparent;
          height: 100%;
          content: '';
          background: #3a113f;
          transition: all 0.5s ease;
        }

        span {
          position: relative;
        }

        &:hover {
          transform: scale(1.08);

          &::before {
            width: 100%;
            visibility: visible;
            border-color: ${primaryColor};
          }
        }
      }
    }
  }
`;

export default Marketplace;