import React from 'react'
import styled from "styled-components";
import { secondaryColor  } from '../constants/theme';

const Button = styled.button`
  border-radius: 4px;
  height: 40px;
  min-width: 90px;
  padding: 4px 8px;
  font-size: 18px;
  color: white;

  & > * {
    color: white;
    letter-spacing: 0.4px;
  }
`;

const StyledButtonFilled = styled(Button)`
  background: ${secondaryColor};
`;

const StyledButtonOutlined = styled(Button)`
  box-shadow: inset 0 0 0 1px ${secondaryColor};
`;

const ButtonFilled = ({children, props}) => (
  <StyledButtonFilled {...props}>
    {children}
  </StyledButtonFilled>
);


const ButtonOutlined = ({children, props}) => (
  <StyledButtonOutlined {...props}>
    {children}
  </StyledButtonOutlined>
);

export { ButtonFilled, ButtonOutlined };