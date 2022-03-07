import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import useMediaQuery from '@mui/material/useMediaQuery';
import { SectionLight } from '../shared/Layout';
import logo from '../assets/logo.png';
import { breakpoint, device } from '../constants/breakpoints';
import { menu, hamburgerIcon, closeIcon, menuHeight } from '../constants/menu';
import { primaryColor, gray, secondaryColor, thirdColorLight, secondaryColorDark, thirdColor, thirdColorHovered } from '../constants/theme';

const Header = ({setMobileOpen, mobileOpen}) => {
  const isMobile = useMediaQuery(breakpoint(device.md));
  const menuEntries = menu.map(entry => (
    <li key={entry.idx}><Link to={entry.url} onClick={ () => setMobileOpen(false) }>{entry.label}</Link></li>
  ));

  return (
    <FullHeader>
      <Logo><img src={logo} alt="Logo" /></Logo>
      {!isMobile && (
        <DesktopMenu>
          <ul>
            {menuEntries}
          </ul>
        </DesktopMenu>
      )}
      <div className="right">
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
                <nav>
                  <SectionLight>
                    <ul>
                      {menuEntries}
                    </ul>
                  </SectionLight>
                </nav>
              </>
            )}
          </MobileMenu>
          )}
      </div>
    </FullHeader>
  )
}

const DesktopMenu = styled.nav`
  display: flex;
  align-items: center;
  min-width: 0;
  width: 100%;
  margin: 0 20px;

  ul {
    display: flex;

    li {
      display: flex;
      justify-content: center;
      height: ${menuHeight};
      line-height: ${menuHeight};
      align-items: center;

      &:not(:last-child) {
        margin-right: 20px;
      }

      a {
        color: ${primaryColor};
        border-bottom: 4px solid transparent;
        padding: 0 12px;
        position: relative;
        border-radius: 2px;
        text-transform: uppercase;
        letter-spacing: 1.2px;

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
          background: ${secondaryColorDark};
          border-radius: 2px;
      }

        &:hover {
          color: ${secondaryColor};
          border-color: ${secondaryColorDark};

          &:after {
            transform: scaleX(1);
            background: ${thirdColorLight};
          }
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
    background: ${gray};
    padding: 12px;

    img {
      display: none;
      width: 16px;

      ${breakpoint(device.md)} {
        display: inline;
      }
    }
  }

  nav {
    display: flex;
    justify-content: center;
    position: fixed;
    top: ${menuHeight};
    right: 0;
    left: 0;
    bottom: 0;

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        margin: 24px 0;

        a {
          font-size: 30px;
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
    }
  }
`;

const Logo = styled.div`
  padding: 20px;

  img {
    width: 55px;
  }
`;

const FullHeader = styled.div`
  background: white;
  box-shadow: -1px 4px 25px 6px rgb(43 61 80 / 48%);
  display: flex;
  padding: 0 20px;
  height: ${menuHeight};
  position: relative;
  z-index: 1;
  border-bottom: 4px solid #6fc5fe;

  ${breakpoint(device.md)} {
    justify-content: space-between;
  }

  .right {
    display: flex;
  }
`;

export default Header;
