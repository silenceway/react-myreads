import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class ListBooks extends Component {
  state = {
  }

  render () {
    const { books, onUpdateBook } = this.props;
    let currentlyList,
      wantList,
      readList;

    currentlyList = books.filter((book) => book.shelf.search("currentlyReading")  !== -1 );
    wantList = books.filter((book) => book.shelf.search("wantToRead")  !== -1 );
    readList = books.filter((book) => book.shelf.search("read")  !== -1 );

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyList.map((book) =>
                    <Book onUpdateBook={onUpdateBook} book={book} />
                  )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantList.map((book) =>
                    <Book book={book} onUpdateBook={onUpdateBook} />
                  )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {readList.map((book) =>
                    <Book book={book} onUpdateBook={onUpdateBook} />
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
