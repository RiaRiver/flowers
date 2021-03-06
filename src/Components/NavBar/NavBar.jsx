import React from 'react';
import styled from 'styled-components';
import logoImg from '../../images/logo.svg';
import SignImg from '../../images/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 15px;
  background-color: #7332c8;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.button`
  font-size: 16px;
  background-color: transparent;
  color: white;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ::before {
  content: '';
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
  background: url(${SignImg});
  }
`;

const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt='logo'/>
      <H1>Eustoma</H1>
    </Logo>
    <Login>Login</Login>
  </NavBarStyled>
);

export default NavBar;