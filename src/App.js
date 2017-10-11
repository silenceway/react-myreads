import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import ListBooks from './ListBooks';
import SearchBook from './SearchBook';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact 
          render={() => (
            <ListBooks />
          )} />
        <Route path="/search" 
          render={({ history }) => (
            <SearchBook />
          )} />
      </div>
    )
  }
}

export default App;
