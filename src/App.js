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
    searchbarInput: '',
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

  onSearchbarChange = (event) => {
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
