import React, { useState } from 'react';
import styled from "styled-components";
import AddNewDeed from '../components/AddNewDeed';
import { ContentWrapper } from '../shared/Layout';
import { H2Light, H3Dark } from '../shared/Typography';
import { discord, docs } from '../constants/icons';

const Home = () => {
  const [ addClicked, setAddClicked ] = useState(false);

  return (
    <main>
      <LinksWrapper>
        <a target="_blank" rel="noopener noreferrer" href="https://app.gitbook.com/o/9s1HWmu67VMunIKY0cOc/s/ntM5l4suiGLNXTWUeHAb/">
          <img src={docs} alt="Docs" />
          Documentation
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://app.gitbook.com/o/9s1HWmu67VMunIKY0cOc/s/ntM5l4suiGLNXTWUeHAb/">
        <img src={discord} alt="Discord" />
          Discord
        </a>
      </LinksWrapper>
      
      <ContentWrapper>
        <H2Light>Add or manage your existing deeds</H2Light>
        
        <DeedsWrapper>
          <H3Dark>My deeds</H3Dark>

          <div>
            {!addClicked && (
            <span>
              <p>You don't have any deeds yet. </p>
              <ButtonFilled onClick={() => setAddClicked(true)}>Add Deed</ButtonFilled>
            </span>
            )}
          </div>
        </DeedsWrapper>
      </ContentWrapper>
    </main>
  )
}

const DeedsWrapper = styled.div`
  border-radius: 6px;
  background: #00000059;
  padding: 30px;

  & > div {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      text-align: center;
      
      p {
        margin-bottom: 8px;
      }
    }
  }
`;

const LinksWrapper = styled.div`
  max-width: fit-content;
  margin: 30px auto;
  padding: 20px;
  background: #00000059;
  border-radius: 4px;

  a {
    color: white;
    display: inline-flex;
    align-items: center;

    img {
      margin-right: 8px;
    }

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

const Button = styled.button`
  border-radius: 4px;
  height: 40px;
  padding: 4px 8px;
  font-size: 18px;
  color: white;
`

const ButtonFilled = styled(Button)`
  background: #ae92bb;
`;

const ButtonOutlined = styled(Button)`
  box-shadow: inset 0 0 0 1px #ae92bb;
`;



export default Home;