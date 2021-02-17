import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';

import Burger from './Burger';
import './nav.scss';

const { Search } = Input;

const Navbar = () => {
  const onSearch = () => {
    console.log('Searched');
  };

  return (
    <div className="mainNav">
      <Link to="/">
        <h3 className="logo mt-2">ProductRave</h3>
      </Link>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        className="searchInput hideSm"
      />
      <Burger />
    </div>
  );
};

export default Navbar;
