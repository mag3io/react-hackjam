import React, { Component } from 'react';
import filters from '../mocks/filters';
import books from '../mocks/books';

import FilterList from './filterList';
import BookList from './bookList';


class Main extends Component {
  constructor () {
    super();
    this.closeSideBar = this.closeSideBar.bind(this);
    this.openSideBar = this.openSideBar.bind(this);
    this.search = this.search.bind(this);
    this.selectTab = this.selectTab.bind(this);
    this.state = {
      books,
      filters,
    };
  }

  selectTab ( category ) {
    this.setState({
      filters: filters.map(filter => {
        if (filter.category === category) {
          filter.selected = true;
        } else {
          filter.selected = false;
        }
        return filter;
      }),
     books: category === 'All'? books : books.filter( book => {
      return book.category === category;
     }),
    });
  }

  closeSideBar () {
    this.setState({
      navClosed: false
    });
  }

  openSideBar () {
    this.setState({
      navClosed: true
    });
  }

  search (input) {
    console.log(input.target.value);
  }

  render () {
    const { books, filters } = this.state;

    let className = 'gallery';

    if ( this.state.navClosed ) {
      className += ' filter-is-visible';
    }

    return (
    <main className="main-content">
      <FilterList filters={ this.state.filters } selectTab={ this.selectTab }></FilterList>

        <section className={ className } >
          <BookList books={ this.state.books }></BookList>
        </section>

      <div className={ this.state.navClosed? 'filter filter-is-visible': 'filter' }>
			  <form>
				<div className="filter-block">
					<h4>Search</h4>

					<div className="filter-content">
						<input type="search" placeholder="title, price..." onChange={ this.onChange }/>
					</div>
				</div>

        </form>
        <a href="#0" className="close" onClick={ this.closeSideBar }>Close</a>
      </div>

      <a href="#0" className="filter-trigger" onClick={ this.openSideBar }>Filters</a>
    </main>
   );
  }
}

export default Main;
