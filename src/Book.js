import React, { Component } from 'react';

class Book extends Component {

  render () {
    const { book, onUpdateBook } = this.props;
    const bookImage = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "http://via.placeholder.com/128x193?text=No%20Cover";

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + bookImage + ')' }}></div>
            <div className="book-shelf-changer">
              <select value={book.shelf}
                onChange={event => onUpdateBook({ value: event.target.value, book: book })}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors && book.authors.map((author, i) => <span key={i}>
                {!!i && ", "}
                {author}
                </span>
            )}
          </div>
        </div>
      </li>
    )
  }
}

export default Book