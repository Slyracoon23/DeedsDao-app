import React from 'react'
import styled from "styled-components";
import { primaryColor  } from '../constants/theme';

const StyledH1 = styled.h1`
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 30px;
`;

const StyledH1Small = styled(StyledH1)`
  font-size: 20px;
`;

const StyledH2 = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  line-height: 1.25;
  color: ${primaryColor};
  text-shadow: 0 14px 20px rgb(0 0 0 / 15%);
`;

const StyledH3 = styled.h3`
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 20px;
`;


const H1Dark = ({children}) => (
  <StyledH1>
    {children}
  </StyledH1>
)

const H1DarkSmall = ({children}) => (
  <StyledH1Small>
    {children}
  </StyledH1Small>
)


const H2Light = ({children}) => (
  <StyledH2>
    {children}
  </StyledH2>
)

const H3Dark = ({children}) => (
  <StyledH3>
    {children}
  </StyledH3>
)

export { H1Dark, H1DarkSmall, H2Light, H3Dark };