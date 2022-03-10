import React from 'react'
import styled from "styled-components";
import { breakpoint, device } from '../constants/breakpoints';

const Wrapper = styled.div`
    box-shadow: 0 0 0 1px #ffffff14, inset 0 0 20px 20px #0000000f;
    max-width: fit-content;
    padding: 40px;
    background: linear-gradient(46deg, #ffffff00, #00000029);
    margin: 50px auto;
    border-radius: 6px;

    ${breakpoint(device.lg)} {
      max-width: 665px;
    }
  `;

const ContentWrapper = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export {  ContentWrapper };