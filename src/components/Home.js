import React from 'react';
import { Textarea, TextInput } from '../shared/Form';
import { ContentWrapper } from '../shared/Layout';
import { H2Light } from '../shared/Typography';

const Home = () => {
  const inputs = [
    { id: 'token-name', value: 'DeedXY', label: 'Token Name', type: 'text' },
    { id: 'ticker-symbol', value: 'USDT', label: 'Ticker symbol', type: 'text' },
    { id: 'total-supply', value: '1000000', label: 'Total Supply', type: 'text' },
    { id: 'percentage-to-unlock', value: '30%', label: 'Percentage of supply needed to unlock NFT-collection', type: 'text' },
    { id: 'description', value: 'Add description...', label: 'Description (optional)', type: 'textarea' }
  ]

  return (
    <main>
      <ContentWrapper>
        <H2Light>
          Add a new Deed
        </H2Light>
        <p>Add a new deed or use edit an existing one...</p>

        <form>
            {inputs.map(i => (
              i.type === 'text' ?
              (
                <TextInput id={i.id} value={i.value} label={i.label} onChange={e => console.log(e)} />
              ) : (
                <Textarea id={i.id} value={i.value} label={i.label} onChange={e => console.log(e)} />
              )
            ))}
          </form>
      </ContentWrapper>
    </main>
  )
}

export default Home;