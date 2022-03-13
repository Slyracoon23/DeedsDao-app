import React, { useState } from 'react';
import styled from "styled-components";
import { ContentWrapper, ContentWrapperInvisible } from '../shared/Layout';
import { H2Light, H3Dark } from '../shared/Typography';
import { ButtonFilled } from '../shared/Button';
import { PoolList } from '../shared/PoolList';
import { secondaryColor } from '../constants/theme';


const Pool = () => {
  const [ addClicked, setAddClicked ] = useState(false);

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