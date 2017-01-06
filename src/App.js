// @flow

import React, { Component } from 'react';

import Header from './Header';
import MovieList from './MovieList';

import './App.css';

const App = () => (
  <div className="container">
    <Header />
    <MovieList />
  </div>
);

export default App;
