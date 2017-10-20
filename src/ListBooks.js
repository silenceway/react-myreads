import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class ListBooks extends Component {
  render () {
    const { books, onUpdateBook } = this.props;
    const shelfs = [
      {'id': '1', 'value': 'currentlyReading', 'title': 'Currently Reading'},
      {'id': '2', 'value': 'wantToRead', 'title': 'Want to Read'},
      {'id': '3', 'value': 'read', 'title': 'Read'},
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelfs.map((shelf) =>
              <Shelf books={books} shelf={shelf} onUpdateBook={onUpdateBook} key={shelf.id} />
            )}
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
