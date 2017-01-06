// @flow

import React, { Component } from 'react';

import Header from './Header';
import Backdrop from './Backdrop';
import MovieList from './MovieList';

import Api from './Api';
import generateImageName from './generateImageName';

import './App.css';

class App extends Component {
  state = {
    backdropImage: '',
    items: [],
  }

  componentDidMount() {
    // fetch on `didMount` because of

    Api.getList(1).then(result => {
      this.setState({
        backgroundImage: result.backdrop_path,
        items: result.results,
      })
    });
  }

  render(): React.Element<*> {
    return (
      <div className="container">
        <Backdrop url={this.state.backgroundImage} />
        <Header />
        <MovieList items={this.state.items} />
      </div>
    );
  }
}

export default App;
