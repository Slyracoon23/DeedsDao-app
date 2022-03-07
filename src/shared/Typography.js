import React from 'react'
import styled from "styled-components";

const H2Light = ({children}) => {
  const StyledH2 = styled.h2`
    font-size: 60px;
    margin-bottom: 20px;
    line-height: 1.25;
    font-weight: bold;
    background: -webkit-linear-gradient(0,#55ceff,#f675ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 14px 20px rgb(0 0 0 / 15%);
  `;

  return (
    <StyledH2>
      {children}
    </StyledH2>
  );
}

const H2Dark = ({children}) => {
  const StyledH2 = styled.h2`
    font-size: 60px;
    margin-bottom: 20px;
    line-height: 1.25;
    font-weight: bold;
    background: -webkit-linear-gradient(11deg,#c546bad9,#ab9fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 14px 20px rgb(0 0 0 / 15%);
  `;

  return (
    <StyledH2>
      {children}
    </StyledH2>
  );
}

const H3Light = ({children}) => {
  const StyledH3 = styled.h3`
    font-size: 45px;
    line-height: 1.25;
    margin-bottom: 20px;
    background: -webkit-linear-gradient(268deg,#c9f5fb,#00bcd494);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 8px 20px rgb(0 0 0 / 25%);
  `;

  return (
    <StyledH3>
      {children}
    </StyledH3>
  );
}

const H3Dark = ({children}) => {
  const StyledH3 = styled.h3`
    font-size: 45px;
    line-height: 1.25;
    margin-bottom: 20px;
    background: -webkit-linear-gradient(268deg,#c9f5fb,#00bcd494);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 4px 20px rgb(255 255 255 / 17%);
  `;

  return (
    <StyledH3>
      {children}
    </StyledH3>
  );
}

export { H2Light, H3Light, H2Dark, H3Dark };