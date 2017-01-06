// @flow

import React from 'react';

import './Searchbar.css';

const Searchbar: () => React.Element<*> = ({ onChange }) => (
  <input
    className="searchbar"
    placeholder="Search..."
    onChange={onChange} />
);

export default Searchbar;
