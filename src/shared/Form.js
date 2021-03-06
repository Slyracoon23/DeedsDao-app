import React from 'react';
import styled from "styled-components";
import { primaryColor, secondaryColor, thirdColor } from '../constants/theme';

const inputWidth = '250px';

const Form = ({inputs}) => (
  <FormWrapper>
    <form>
      {inputs.map(i => (
        i.type === 'text' ? <TextInput key={i.id} id={i.id} value={i.value} label={i.label} onChange={e => console.log(e)} />
      : i.type === 'textarea' ? <Textarea key={i.id} id={i.id} value={i.value} label={i.label} onChange={e => console.log(e)} />
      : i.type === 'submit' ? <ButtonSubmit key={i.id} id={i.id} label={i.label} onClick={i.action} />
      : null
      ))}
    </form>
  </FormWrapper>
)

const ButtonSubmit = ({onClick, disabled, label, id, children, props}) => (
  <InputWrapper {...props}>
    <div className="button-wrapper">
      <button 
        disabled={disabled}
        onClick={e => onClick(true)} 
      >{label || 'Submit'}</button>
    </div>
  </InputWrapper>
);

const TextInput = ({onChange, onFocus, value, label, id, children}) => (
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

const FormWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;

  form {
    background: #00000060;
    padding: 30px;
    border-radius: 8px;
  }
`;

const InputWrapper = styled.div`
  width: ${inputWidth};

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  label {
    display: block;
    text-transform: uppercase;
    margin-bottom: 6px;
    line-height: 1.4;
    font-size: 12px;
  }

  div {
    background: linear-gradient(45deg,rgba(111 197 254 / 50%),rgb(148 92 209 / 50%),rgb(170 72 167 / 50%));
    padding: 4px;
    border-radius: 8px;
    transform: translateY(2px);

    &:focus-within {
      background: linear-gradient(45deg, ${primaryColor}, ${secondaryColor}, ${thirdColor});
    }
  }

  input {
    height: 36px;
  }

  input, textarea {
    width: 242px;
    border-radius: 4px;
    border: none;
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

  .button-wrapper {
    text-align: center;
    margin-top: 20px;
    background: ${primaryColor};

    button {
      height: 40px;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0.5px;
    }
  }

  textarea {
    resize: vertical;
    font-family: sans-serif;
    min-height: 64px;
  }
`;

export { Form, TextInput, Textarea, ButtonSubmit };
