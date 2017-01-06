// @flow

import React from 'react';

import './MovieItem.css';

const MovieItem: () => React.Element<*> = ({ image, name }) => (
  <div className="movie-item" style={{ backgroundImage: `url(${image})` }}>
    <span>{name}</span>
  </div>
)

export default MovieItem;
