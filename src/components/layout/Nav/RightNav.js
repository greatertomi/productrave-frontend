import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { BiLogIn, BiDockTop } from 'react-icons/bi';

import './nav.scss';

const Ul = styled.ul`
  @media (max-width: 768px) {
    .navItems {
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
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
          <NavLink to="/login" className="li navLink">
            <BiLogIn size={30} color="#1169E5" />
            <div>Login</div>
          </NavLink>
          <NavLink to="/register" className="li">
            <BiDockTop size={30} color="#1169E5" />
            <div>Register</div>
          </NavLink>
        </div>
      )}
    </Ul>
  );
};

RightNav.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default RightNav;
