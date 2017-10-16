import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import ListBooks from './ListBooks';
import SearchBook from './SearchBook';
import './App.css';
import * as BooksAPI from './BooksAPI';

class App extends Component {
  state = {
    books: []
  };

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  };

  updateBook = (book) => {
    BooksAPI.update(book, "currentlyReading").then((booksStatus) => {
      this.getAllBooks();
    });
  };

  componentDidMount () {
    this.getAllBooks();
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact
          render={() => (
            <ListBooks
              books={this.state.books}
              onUpdateBook="" />
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
