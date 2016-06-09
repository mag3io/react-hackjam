import React, { Component } from 'react';
import Book from './book';

class BookList extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    books: React.PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        { this.props.books.map( book => <Book key={ book.title } book={ book }></Book>) }
      </div>
    );
  }

};

export default BookList;
