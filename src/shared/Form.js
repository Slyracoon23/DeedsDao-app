import React from 'react'
import styled from "styled-components";
import { primaryColor, gray, secondaryColor, thirdColorLight, secondaryColorDark, thirdColor, thirdColorHovered } from '../constants/theme';


const inputWidth = '250px';

const InputWrapper = styled.div`
  width: ${inputWidth};

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  label {
    display: block;
    text-transform: uppercase;
    margin-bottom: 6px;
    font-size: 12px;
  }

  div {
    background: linear-gradient(45deg,rgba(111 197 254 / 50%),rgb(148 92 209 / 50%),rgb(170 72 167 / 50%));
    padding: 4px;
    border-radius: 8px;

    &:focus-within {
      background: linear-gradient(45deg, ${primaryColor}, ${secondaryColor}, ${thirdColor});
    }
  }

  input, textarea {
    width: 242px;
    border-radius: 4px;
    border: none;
    height: 32px;
    outline: unset;
    padding: 8px;
    font-size: 16px;
    color: black;
    background: transparent;

    &:focus {
      color: #19518f;
      box-shadow: none;
      background: #ffffffde;
    }
  }

  textarea {
    resize: vertical;
    font-family: sans-serif;
    min-height: 64px;
  }
`;

const TextInput = ({onChange, onFocus, value, label, id, children}) => {
  console.log(onChange, 'pattern="[0-9],\.*"', /* evt.target.validity.valid */);

  return (
    <InputWrapper>
      <label htmlFor={id}>
        {label}
      </label>
      <div>
        <input 
          type="text" 
          value={value} 
          onChange={onChange} 
          onFocus={onFocus} 
        />
      </div>
    </InputWrapper>
  );
}

const Textarea = ({onChange, onFocus, value, label, id, children}) => {
  console.log(onChange, 'pattern="[0-9],\.*"', /* evt.target.validity.valid */);

  return (
    <InputWrapper>
      <label htmlFor={id}>
        {label}
      </label>
      <div>
        <textarea 
          value={value} 
          onChange={onChange} 
          onFocus={onFocus} 
        />
      </div>
    </InputWrapper>
  );
}


export { TextInput, Textarea };