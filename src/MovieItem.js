// @flow

import React from 'react';

import './MovieItem.css';

type Props = {
  image: string,
  name: string,
};

const MovieItem: (Props) => React.Element<*> = ({ image, name }: Props) => (
  <div
    className="movie-item"
    style={{ backgroundImage: `url(${image})` }} />
)

export default MovieItem;
