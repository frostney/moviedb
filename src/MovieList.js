// @flow

import React from 'react';

import MovieItem from './MovieItem';

import generateImageName from './generateImageName';

import './MovieList.css';

const MovieList: () => React.Element<*> = ({ items }) => (
  <div className="movie-list">{items.map(item => (
    <MovieItem
      key={item.id}
      name={item.title}
      image={generateImageName(item.poster_path)} />
    ))}</div>
)

export default MovieList;
