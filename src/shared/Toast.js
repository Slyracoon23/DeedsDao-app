import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { darkGray } from '../constants/theme';
import { info, success, error } from '../constants/icons';

const Toast = ({message, type}) => {
  const [ removeMessage, setRemoveMessage ] = useState(true);
  const icons = {
    error,
    info,
    success
  };

  useEffect(() => {
    setTimeout(() => setRemoveMessage(false), 50);
    setTimeout(() => setRemoveMessage(true), 3500);

    return () => {
      setRemoveMessage(true);
    }
  }, []);

  return (
    <ToastWrapper type={type} className={removeMessage && 'hidden' }>
      <div>
        <img src={icons[type] || info} alt={type} />
        {message}
      </div>
    </ToastWrapper>
  )
}

const ToastWrapper = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  margin: 0;
  z-index: 2;
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;

  div {
    border-radius: 4px;
    padding: 12px;
    display: flex;
    align-items: center;
    background: ${props => 
      props.type === 'info' ? '#afd2e9'
      : props.type === 'error' ? '#ff5722' : '#5cb988'
    };
    color: ${props => props.type === 'info' ? darkGray : 'initial'};

    img {
      width: 20px;
      margin-right: 8px;
    }
  }
  
  &.hidden {
    top: -100px;
  }
`;

export { Toast };

