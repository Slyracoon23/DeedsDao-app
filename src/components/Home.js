import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ContentWrapper } from '../shared/Layout';
import { H2Light, H3Dark } from '../shared/Typography';
import AddNewDeed from '../components/AddNewDeed';

const Home = () => {
  const [ addClicked, setAddClicked ] = useState(false);

  return (
    <main> 
      <ContentWrapper>
        <H2Light>Add or manage your existing deeds</H2Light>
        <DeedsWrapper>
          <div>
            <H3Dark>My deeds</H3Dark>

              <div>
              {addClicked && (
                <span>
                  <p>You don't have any deeds yet. </p>
                  <ButtonOutlined onClick={() => setAddClicked(false)}>Cancel ‹</ButtonOutlined>
                </span>
                )}
                {!addClicked && (
                <span>
                  <p>You don't have any deeds yet. </p>
                  <ButtonFilled onClick={() => setAddClicked(true)}>Add Deed ›</ButtonFilled>
                </span>
                )}
              </div>
          </div>
          {addClicked && <AddNewDeed /> }
        </DeedsWrapper> 
        
      </ContentWrapper>
    </main>
  )
}

const DeedsWrapper = styled.div`
  display: flex;

    & > div {
      border-radius: 6px;
      background: #00000059;
      padding: 30px;
      min-width: 375px;
      height: fit-content;

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
  & > * {
    color: white;
  }
`;

const ButtonOutlined = styled(Button)`
  box-shadow: inset 0 0 0 1px #ae92bb;
`;



export default Home;