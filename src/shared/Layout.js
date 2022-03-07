import React from 'react'
import styled from "styled-components";
import blockchainBg from '../assets/blockchain-bg.jpg';
import { breakpoint, device } from '../constants/breakpoints';

const SectionLight = ({children}) => {
  const Wrapper = styled.section`
    min-height: 100px;
    width: 100%;
    padding: 40px 40px 70px 40px;
    color: #51c1e3;
    background: 
      linear-gradient(45deg, rgb(0 94 175 / 78%), rgb(165 74 221 / 52%)), 
      linear-gradient(318deg, #f1558a, transparent), 
      black;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='93' height='93'%3E%3Cpath stroke='none' fill='%23ffffff08' d='M41.5 8.3867513459481a10 10 0 0 1 10 0l25.507041555162 14.726497308104a10 10 0 0 1 5 8.6602540378444l0 29.452994616207a10 10 0 0 1 -5 8.6602540378444l-25.507041555162 14.726497308104a10 10 0 0 1 -10 0l-25.507041555162 -14.726497308104a10 10 0 0 1 -5 -8.6602540378444l0 -29.452994616207a10 10 0 0 1 5 -8.6602540378444'%3E%3C/path%3E%3C/svg%3E");
      background-image: url(${blockchainBg});
      opacity: 0.05;
      pointer-events: none;
    }
  `;

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

const SectionDark = ({children}) => {
  const Wrapper =  styled.section`
    background: linear-gradient(79deg, #020d26, #370438);
    padding: 40px 40px 70px 40px;
    width: 100%;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='93' height='93'%3E%3Cpath stroke='none' fill='%23ffffff08' d='M41.5 8.3867513459481a10 10 0 0 1 10 0l25.507041555162 14.726497308104a10 10 0 0 1 5 8.6602540378444l0 29.452994616207a10 10 0 0 1 -5 8.6602540378444l-25.507041555162 14.726497308104a10 10 0 0 1 -10 0l-25.507041555162 -14.726497308104a10 10 0 0 1 -5 -8.6602540378444l0 -29.452994616207a10 10 0 0 1 5 -8.6602540378444'%3E%3C/path%3E%3C/svg%3E");
      background-image: url(${blockchainBg});
      opacity: 0.05;
      pointer-events: none;
    }

    h3 {
      background: -webkit-linear-gradient(24deg,#7e51c7d9,#d573ed);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p { 
      color: #9962ccdb;
    }
  `;

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

const ContentWrapper = ({children}) => {
  const Wrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;

    ${breakpoint(device.lg)} {
      max-width: 665px;
    }
  `;

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export { SectionDark, SectionLight, ContentWrapper };