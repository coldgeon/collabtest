import React from 'react';
import styled from 'styled-components';

function Nave() {
  return (
    <Navbar>
      <Logo>Aehopark</Logo>
      <NavItems>
        <NavItem>어플정보</NavItem>
        <NavItem>문의하기</NavItem>
      </NavItems>
    </Navbar>
  );
}

export default Nave;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  
`;

const Logo = styled.div`
  ${({ theme }) => theme.fonts.sansita_one};
  font-size: 32px;
  color: ${({ theme }) => theme.colors.pc1};
  width: 200px;
  height:30.53px;
  padding-top:23px;
  padding-left:80px;
  
`;


const NavItems = styled.div`
  display: flex;
`;


const NavItem = styled.a`
  padding-top:23px;
  margin-left: -40px;
  margin-right: 70px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: #4CAF50;
  }
`;
