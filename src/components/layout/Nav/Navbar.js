import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';

import Burger from './Burger';
import './nav.scss';
import { AuthContext } from '../../../context/AuthContext';

const { Search } = Input;

const Navbar = () => {
  const [loggedIn] = useContext(AuthContext);
  const onSearch = () => {
    console.log('Searched');
  };

  return (
    <div className="mainNav">
      <Link to={loggedIn ? '/dashboard' : '/'}>
        <h3 className="logo mt-2">ProductRave</h3>
      </Link>
      {loggedIn && (
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          className="searchInput hideSm"
        />
      )}
      <Burger />
    </div>
  );
};

export default Navbar;
