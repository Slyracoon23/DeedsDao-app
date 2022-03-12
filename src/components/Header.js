import React from 'react';
import styled from "styled-components";
import logo from '../assets/logo.png';
import { breakpoint, device } from '../constants/breakpoints';

const Header = ({setMobileOpen, mobileOpen}) => {
  const accountBalance = '0$';
  const accountAddress = '0x137054be6978FcC75617bDF918cA91947a0DA94c';

  const shortAddress = (address) => address.substring(0,5) 
    + '..' 
    + address.substring(address.length - 3, address.length)

  return (
    <FullHeader>
      <Logo><img src={logo} alt="Logo" /></Logo>

      <AccountBalance>
        <span>
          Account Balance: {accountBalance}
        </span>
      </AccountBalance>

      <AccountAddress>
        <span>{shortAddress(accountAddress)}</span>
      </AccountAddress>
    </FullHeader>
  )
}

const AccountBalance = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  span {
    padding: 8px;
    border: thin solid #ae92bb;
    border-radius: 8px;
  }
`;


const AccountAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    height: 32px;
    padding: 8px;
    background: #ae92bb;
    border-radius: 8px;
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

  ${breakpoint(device.md)} {
    justify-content: space-between;
  }

  .right {
    display: flex;
  }
`;

export default Header;
