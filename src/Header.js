// @flow

import React from 'react';

import Searchbar from './Searchbar';
import './Header.css';

const Header: () => React.Element<*> = () => (
  <div className="header">
    <Searchbar />
  </div>
)

export default Header;
