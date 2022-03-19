import React from 'react';
import { ContentWrapperInvisible } from '../shared/Layout';
import PoolList from '../shared/PoolList';
import { H2Light } from '../shared/Typography';

const Pool = () => {
  return (
    <main> 
      <ContentWrapperInvisible>
        <H2Light>My Pools</H2Light>
        <PoolList items={null} withAddPool={true} />
      </ContentWrapperInvisible>
    </main>
  )
}

export default Pool;