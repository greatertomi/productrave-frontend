import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: #1b1b1b;
  color: white;
  border-style: none;

  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <div>
      <Nav>
        <h3 className="logo">ProductRave</h3>
        <Burger />
      </Nav>
    </div>
  );
};

export default Navbar;
