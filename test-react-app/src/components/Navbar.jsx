import styled from 'styled-components';

function Nave() {
  return (
    <Navbar>
      <Logo>Aehopark</Logo>
      <NavItems>
        <NavItem>이용정보</NavItem>
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
  font-size: 24px;
  font-weight: bold;
  color: #4caf50;
`;

const NavItems = styled.div`
  display: flex;
`;

const NavItem = styled.a`
  margin-left: 20px;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #4caf50;
  }
`;
