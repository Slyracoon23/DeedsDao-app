import React from 'react'
import styled from "styled-components";

const InputWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }

  label {
    display: block;
    text-transform: uppercase;
    margin-bottom: 6px;
    font-size: 12px;
  }

  input, textarea {
    width: 200px;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 0 1px #a3c5db;
    height: 32px;
    outline: unset;
    padding: 8px;
    font-size: 14px;
    color: #a3c5db;
    background: #ffffff36;

    &:focus {
      color: black;
      box-shadow: 0 0 0 2px #6fc5fe;
      background: #ffffffde;
    }
  }

  textarea {
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
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        onFocus={onFocus} 
      />
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
      <textarea 
        value={value} 
        onChange={onChange} 
        onFocus={onFocus} 
      />
    </InputWrapper>
  );
}


export { TextInput, Textarea };