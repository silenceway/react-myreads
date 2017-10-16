import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class SearchBook extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    });
    if (this.props.onSearchBook && this.state.query.length) {
      this.props.onSearchBook(this.state.query);
    }
  };

  clearQuery = () => {
    this.setState({
      query: ''
    });
  };

  render () {
    const { books, results, onSearchBook, onCreateBook } = this.props;
    const { query } = this.state;
    let showingResults;

    showingResults = results.map((result) => {
      let book = books.filter((book)  => {
        return book.id === result.id;
      }).map((book) => { return book.shelf });
      result.shelf = (book.length && book[0]) || 'none';
      return result;
    });

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingResults.map((book) =>
              <Book book={book} onUpdateBook={onCreateBook} />
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook
