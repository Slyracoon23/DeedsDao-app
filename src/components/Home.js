import React from 'react';
import { Textarea, TextInput, ButtonSubmit } from '../shared/Form';
import { ContentWrapper } from '../shared/Layout';
import { H2Light } from '../shared/Typography';
import styled from "styled-components";

const Home = () => {
  const inputs = [
    { id: 'token-name', value: 'DeedXY', label: 'Token Name', type: 'text' },
    { id: 'ticker-symbol', value: 'USDT', label: 'Ticker symbol', type: 'text' },
    { id: 'total-supply', value: '1000000', label: 'Total Supply', type: 'text' },
    { id: 'percentage-to-unlock', value: '30%', label: 'Percentage of supply needed to unlock NFT-collection', type: 'text' },
    { id: 'description', value: 'Add description...', label: 'Description (optional)', type: 'textarea' },
    { id: 'submit', label: 'Add deed', type: 'submit' }
  ]

  return (
    <main>
      <ContentWrapper>
        <H2Light>
          Add a new Deed
        </H2Light>
        <p>Add a new deed or use edit an existing one...</p>

        <FormWrapper>
          <form>
            {inputs.map(i => (
              i.type === 'text' ? <TextInput key={i.id} id={i.id} value={i.value} label={i.label} onChange={e => console.log(e)} />
            : i.type === 'textarea' ? <Textarea key={i.id} id={i.id} value={i.value} label={i.label} onChange={e => console.log(e)} />
            : i.type === 'submit' ? <ButtonSubmit key={i.id} id={i.id} label={i.label} onChange={e => console.log(e)} />
            : null
            ))}
          </form>
        </FormWrapper>
      </ContentWrapper>
    </main>
  )
}

const FormWrapper = styled.div`
  margin: 20px auto 0 auto;
  display: flex;
  justify-content: center;

  form {
    background: #00000061;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 8px #9797971c;
  }
`;

export default Home;