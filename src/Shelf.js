import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
  render () {
    const { books, onUpdateBook, shelf } = this.props;
    let bookList;

    bookList = books.filter((book) => book.shelf.search(shelf.value)  !== -1 );

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList.map((book) =>
              <Book onUpdateBook={onUpdateBook} book={book} key={book.id} />
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
