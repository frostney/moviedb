// @flow

import React from 'react';

import Searchbar from './Searchbar';
import './Header.css';

const Header: () => React.Element<*> = ({ onSearchbarChange }) => (
  <div className="header">
    <Searchbar onChange={onSearchbarChange} />
  </div>
)

export default Header;
