// @flow

import React from 'react';

import Searchbar from './Searchbar';
import './Header.css';

type Props = {
  onSearchbarChange: (event: Object) => {},
};

const Header: (Props) => React.Element<*> = ({ onSearchbarChange }: Props) => (
  <div className="header">
    <Searchbar onChange={onSearchbarChange} />
  </div>
)

export default Header;
