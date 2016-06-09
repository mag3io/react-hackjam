import React, { Component } from 'react';

class Book extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    book : React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      cover: React.PropTypes.string.isRequired
    })
  }

  render() {
    return (
        <li key={ this.props.book.title }><img src={ this.props.book.cover }/></li>
    );
  }

};

export default Book;
