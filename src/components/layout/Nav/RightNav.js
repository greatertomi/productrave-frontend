import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { NavLink, useHistory } from 'react-router-dom';
import { BiLogIn, BiDockTop, BiLogOut } from 'react-icons/bi';
import { AiOutlineAppstoreAdd, AiOutlineMessage } from 'react-icons/ai';
import { AuthContext } from '../../../context/AuthContext';
import './nav.scss';

const Ul = styled.ul`
  @media (max-width: 768px) {
    .navItems {
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    }
  }
`;

const RightNav = ({ open }) => {
  const [loggedIn, setLoggedIn] = useContext(AuthContext);
  const history = useHistory();

  const logOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn');
    history.push('/');
  };

  return (
    <Ul open={open} className="ul">
      {loggedIn ? (
        <div className="navItems pt-2">
          <NavLink
            to="/create-product"
            className="li navLink"
            activeClassName="active"
          >
            <AiOutlineAppstoreAdd size={30} />
            <div>Create Product</div>
          </NavLink>
          <NavLink
            to="/dashboard"
            className="li navLink"
            activeClassName="active"
          >
            <AiOutlineMessage size={30} />
            <div>Messages</div>
          </NavLink>
          <div onClick={logOut} className="li navLink">
            <BiLogOut size={30} />
            <div className="hideLg">Logout</div>
          </div>
        </div>
      ) : (
        <div className="navItems pt-2">
          <NavLink to="/login" className="li navLink" activeClassName="active">
            <BiLogIn size={30} />
            <div>Login</div>
          </NavLink>
          <NavLink to="/register" className="li" activeClassName="active">
            <BiDockTop size={30} />
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
