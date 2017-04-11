// @flow

import React, { Component } from 'react';

import Header from './Header';
import Backdrop from './Backdrop';
import MovieList from './MovieList';

import Api from './Api';
import generateImageName from './generateImageName';

import type { ApiResponse, Item } from './types';

import './App.css';

type State = {
  backgroundImage: string,
  items: Array<Item>,
  searchbarInput: string,
};

class App extends Component {
  state: State = {
    backgroundImage: '',
    items: [],
    searchbarInput: '',
  }

  componentDidMount() {
    // fetch on `didMount` because of

    Api.getList(1).then((result: ApiResponse) => {
      this.setState((prevState: State) => ({
        backgroundImage: result.backdrop_path,
        items: result.results,
      }))
    });
  }

  onSearchbarChange = (event: Object) => {
    this.setState({ searchbarInput: event.target.value });
  }

  render(): React.Element<*> {
    const filteredItems = this.state.items.filter(item => {
      return item.title.toLowerCase().indexOf(this.state.searchbarInput) >= 0;
    })

    return (
      <div className="container">
        <Backdrop url={this.state.backgroundImage} />
        <Header onSearchbarChange={this.onSearchbarChange} />
        <MovieList items={filteredItems} />
      </div>
    );
  }
}

export default App;
