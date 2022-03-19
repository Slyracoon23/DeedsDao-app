import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Toast = ({message}) => {
  const [ removeMessage, setRemoveMessage ] = useState(true);

  useEffect(() => {
    setTimeout(() => setRemoveMessage(false), 50);
    setTimeout(() => setRemoveMessage(true), 2000);
  }, [])

  return (
    <ToastWrapper className={removeMessage && 'hidden'}>
      {message}
    </ToastWrapper>
  )
}

const ToastWrapper = styled.div`
  position: fixed;
  top: 60px;
  left: 40%;
  margin: 0 0 20px 32px;
  border-radius: 4px;
  background: #5cb988;
  padding: 12px;
  z-index: 2;
  transition: all 0.4s ease;

  &.hidden {
    top: -100px;
  }
`;

export { Toast };

