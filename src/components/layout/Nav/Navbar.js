import React from 'react';
import { Link } from 'react-router-dom';

import Burger from './Burger';
import './nav.scss';

const Navbar = () => {
  return (
    <div className="mainNav">
      <Link to="/">
        <h3 className="logo">ProductRave</h3>
      </Link>
      <Burger />
    </div>
  );
};

export default Navbar;
