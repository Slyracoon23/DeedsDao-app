import React from 'react'
import styled from "styled-components";
import { breakpoint, device } from '../constants/breakpoints';
import { secondaryColor, secondaryColorDark } from '../constants/theme';

const Wrapper = styled.div`
  box-shadow: 0 0 0 2px ${secondaryColor}, inset 0 0 20px 20px #0000000f;
  max-width: fit-content;
  padding: 40px;
  background: linear-gradient(46deg, #ffffff00, #00000029);
  margin: 50px auto;
  border-radius: 6px;

  ${breakpoint(device.lg)} {
    max-width: calc(100% - 40px);
    padding: 40px 20px;
  }
`;

const InvisibleWrapper = styled(Wrapper)`
  box-shadow: none;
`;

const StyledHero = styled.div`
  display: flex;
  height: 200px;
  background: #cb58ff4a;

    & > div {
      margin: 40px auto;
      max-width: 940px;

      ${breakpoint(device.lg)} {
        padding: 0 40px;

        h1 {
          font-size: 24px;
        }
      }

      .buttons-wrapper {
        display: flex;
        justify-content: center;
        margin-top: 24px;

        button:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
`;

const StyledHeroSmall = styled(StyledHero)`
  height: 130px;
`;

const HeroSmall = ({children}) => (
  <StyledHeroSmall>
    {children}
  </StyledHeroSmall>
);

const Hero = ({children}) => (
  <StyledHero>
    {children}
  </StyledHero>
);


const ContentWrapper = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
);

const ContentWrapperInvisible = ({children}) => (
  <InvisibleWrapper>
    {children}
  </InvisibleWrapper>
);

export {  Hero, HeroSmall, ContentWrapper, ContentWrapperInvisible };