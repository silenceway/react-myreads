import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import ListBooks from './ListBooks';
import SearchBook from './SearchBook';
import './App.css';
import * as BooksAPI from './BooksAPI';

class App extends Component {
  state = {
    books: [],
    results: []
  };

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  };

  onUpdateBook = (data) => {
    BooksAPI.update(data.book, data.value).then((booksStatuses) => {
      this.getAllBooks();
    });
  };

  onSearchBook = (query) => {
    BooksAPI.search(query, 20).then((results) => {
      if (results && !results.items) {
        this.setState({ results });
      } else {
        this.setState({ results: [] });
      }
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
              onUpdateBook={this.onUpdateBook}
              books={this.state.books} />
          )} />
        <Route path="/search"
          render={({ history }) => (
            <SearchBook
              books={this.state.books}
              results={this.state.results}
              onSearchBook={this.onSearchBook}
              onCreateBook={(data) => {
                this.onUpdateBook(data);
                history.push('/');
              }} />
          )} />
      </div>
    )
  }
}

export default App;
