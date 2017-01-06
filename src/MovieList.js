// @flow

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import MovieItem from './MovieItem';

import generateImageName from './generateImageName';

import './MovieList.css';

const MovieList: () => React.Element<*> = ({ items }) => (
  <div className="movie-list">
    <ReactCSSTransitionGroup
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      transitionName="movie-item">
      {items.map(item => (
      <MovieItem
        key={item.id}
        name={item.title}
        image={generateImageName(item.poster_path)} />
      ))}
    </ReactCSSTransitionGroup>
  </div>
)

export default MovieList;
