import React from 'react';
import styled from "styled-components";
import { ContentWrapper, SectionLight, SectionDark } from '../shared/Layout';
import { H2Light } from '../shared/Typography';
import pwe_eth from '../assets/members/pwe_eth.png';
import slyracoon23 from '../assets/members/slyracoon23.png';

const Team = () => {
  const members = [
    { idx: 0, name: 'SlyRacoon23', function: 'Backend', avatar: slyracoon23 },
    { idx: 2, name: 'pwe.eth', function: 'Frontend', avatar: pwe_eth },
    { idx: 1, name: 'Favian.eth', function: 'Misc', avatar: '' },
    { idx: 3, name: 'lyons800.eth', function: 'UX', avatar: '' }
  ];

  const avatarImageStyle = ({ url, withGradient = false }) => 'url(' + url + ') ' 
    + 'center center / cover'
    + (withGradient ? ', radial-gradient(circle at left top, rgb(255 0 243) 0%, rgb(0 178 255)' : '');

  const onHoverImage = (event, avatarUrl) => event.target.style.background = avatarImageStyle({ url: avatarUrl });
  const onUnHoverImage = (event, avatarUrl) => event.target.style.background = avatarImageStyle({ url: avatarUrl, withGradient: true });

  return (
    <main>
      <SectionLight>
        <ContentWrapper>
          <H2Light>Who we are</H2Light>
          <p>Bunch of crypto enthusiasts. What else.</p>
        </ContentWrapper>
      </SectionLight>
      <SectionDark>
        <ContentWrapper>
          <MembersWrapper>
            {members.map(m => (
              <li key={m.idx}>
                <div
                  className="img"
                  src={m.avatar}
                  onMouseEnter={e => onHoverImage(e, m.avatar)}
                  onMouseLeave={e => onUnHoverImage(e, m.avatar)}
                  style={{ background: avatarImageStyle({ url: m.avatar, withGradient: true }) }}
                  alt={'Avatar of ' + m.name} 
                />
                <h4>{m.name}</h4>
                <p>{m.function}</p>
              </li>
            ))}
          </MembersWrapper>
        </ContentWrapper>
      </SectionDark>
    </main>
  )
}

const MembersWrapper = styled.ul`
  display: flex;
  margin: 24px -12px 0 -12px;
  flex-wrap: wrap;
  justify-content: center;

  li {
    padding: 12px;

    .img {
      border-radius: 12px;
      padding: 12px;
      background-blend-mode: luminosity;
      width: 200px;
      height: 200px;
      margin-bottom: 12px;
      transition: all 0.5s ease;
      border: 4px solid #dd5ae1;
      background-position-x: center;
      background-position-y: center;
      background-size: cover;

      &:hover {
        border-radius: 0;
        transform: scale(1.1);
        margin-top: -8px;
        transform-origin: center;
        margin-bottom: 20px;
        border: 4px solid white;
      }
    }

    h4 {
      font-weight: bold;
      margin-bottom: 4px;
    }
  }
`;

export default Team;