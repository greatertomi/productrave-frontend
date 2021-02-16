import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ul = styled.ul`
  .navItems {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    z-index: 10;

    li {
      padding: 18px 20px;
      font-size: 17px;
      cursor: pointer;
      &:hover {
        color: #cbc9c9;
      }
    }
  }

  @media (max-width: 768px) {
    .navItems {
      flex-flow: column nowrap;
      background-color: #1b1b1b;
      position: fixed;
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;

      li {
        color: #fff;
      }
    }
  }
`;

const loggedIn = false;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} className="ul">
      {loggedIn ? (
        <div className="navItems">
          <li>Create Item</li>
          <li>Comment</li>
        </div>
      ) : (
        <div className="navItems">
          <li>Login</li>
          <li>Register</li>
        </div>
      )}
    </Ul>
  );
};

RightNav.propTypes = {
  open: PropTypes.string.isRequired,
};

export default RightNav;
