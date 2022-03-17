import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../assets/logo.png';
import { breakpoint, device } from '../constants/breakpoints';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useWeb3 } from '../services/useWeb3';
import { docs, discord } from '../constants/icons';
import { primaryColor, secondaryColor } from '../constants/theme';
import { menu, hamburgerIcon, closeIcon, menuHeight } from '../constants/menu';

const Header = ({ mobileOpen, setMobileOpen }) => {
  const isComponentMounted = useRef(true);
  const isMobile = useMediaQuery(breakpoint(device.lg));
  const isMobileSmall = useMediaQuery(breakpoint(device.sm));

  const [ currentAddress, setCurrentAddress ] = useState('');
  const { connect } = useWeb3(isComponentMounted, setCurrentAddress);

  const menuEntries = menu.map(entry => (
    <li key={entry.idx}><Link to={entry.url} onClick={ () => setMobileOpen(false) }>{entry.label}</Link></li>
  ));

  const shortAddress = (address) => address?.length > 0
    ? address.substring(0,5)
      + '..'
      + address.substring(address.length - 3, address.length)
    : '';
    console.log(currentAddress, shortAddress(currentAddress));

  const externalLinks = (
    <Links>
      <a target="_blank" rel="noopener noreferrer" href="https://app.gitbook.com/o/9s1HWmu67VMunIKY0cOc/s/ntM5l4suiGLNXTWUeHAb/">
        <img src={docs} alt="Docs" />
        Docs
      </a>

      <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/k94YXwJ4">
        <img src={discord} alt="Discord" />
        Discord
      </a>
    </Links>
  );

  return (
    <FullHeader>
      <Logo><img src={logo} alt="Logo" /></Logo>
      {!isMobile && (
        <ul>
          {menuEntries}
        </ul>
      )}
      
      {!isMobileSmall && externalLinks}

      <AccountAddress>
        {currentAddress === '' 
          ? <span onClick={() => connect(setCurrentAddress)}>Connect Wallet</span>
          : <span>{shortAddress(currentAddress)}</span>
        }
      </AccountAddress>

      {isMobile && (
        <MobileMenu>
          {!mobileOpen && (
            <div onClick={ () => setMobileOpen(true) }>
              <img src={hamburgerIcon} alt="Open Menu"  />
            </div>
          )}
          {mobileOpen && (
            <>
              <div onClick={ () => setMobileOpen(false) }>
                <img src={closeIcon} alt="Close Menu"  />
              </div>
              <nav className="mobile">
                <ul>
                  {menuEntries}
                  {isMobileSmall && externalLinks}
                </ul>
              </nav>
            </>
          )}
        </MobileMenu>
        )}
    </FullHeader>
  )
}



const Links = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 12px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 8px;

    img {
      padding-right: 8px;
    }
  }
`;

const AccountAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    height: 32px;
    padding: 8px;
    background: ${secondaryColor};
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
  }
`;

const Logo = styled.div`
  padding: 20px;

  img {
    width: 55px;
  }
`;

const FullHeader = styled.div`
  background: #00000061;
  box-shadow: -1px 4px 25px 6px rgb(43 61 80 / 48%);
  display: flex;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  border-bottom: 4px solid #6fc5fe;
  height: ${menuHeight};

  ${breakpoint(device.md)} {
    justify-content: space-between;
  }

  .left {
    display: flex;
  }

  ul {
    display: flex;
    flex-grow: 1;

    li {
      line-height: ${menuHeight};
      align-items: center;

      &:not(:last-child) {
        margin-right: 20px;
      }

      a {
        color: ${primaryColor};
        height: ${menuHeight};
        display: block;
        border-bottom: 4px solid transparent;
        padding: 0 12px;
        position: relative;
        border-radius: 2px;

        &::after {
          position: absolute;
          content: '';
          width: 100%;
          height: 4px;
          left: 0;
          bottom: -4px;
          transform: scaleX(0);
          transform-origin: 0 0;
          transition: all 0.8s;
          background: white;
          border-radius: 2px;
        }

      &:hover {
        color: ${secondaryColor};

        &:after {
          transform: scaleX(1);
          background: ${secondaryColor};
        }
      }
    }
  }
`;

const MobileMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;

  & > div {
    border-radius: 50%;
    background: #0000005c;
    padding: 12px;

    img {
      width: 16px;
    }
  }

  nav.mobile {
    display: flex;
    justify-content: center;
    position: fixed;
    top: ${menuHeight};
    right: 0;
    left: 0;
    bottom: 0;
    background: #221428;

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        margin: 24px 0;
        line-height: 70px;

        a {
          font-size: 30px;
          height: 70px;
          background: -webkit-linear-gradient(54deg,#55ceffb3,#f96df5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          &:hover {
            background: -webkit-linear-gradient(53deg,#39c9f5,#ffc6ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }

      & > div {
        margin-right: 0;
      }
    }
  }
`;

export default Header;
