import React, { Component } from 'react';
import Filter from './filter';


class FilterList extends Component {

  constructor(props) {
    super(props);


  }

  static propTypes = {
    filters: React.PropTypes.array.isRequired,
    selectTab: React.PropTypes.func.isRequired
  }

  render() {

    const filterItems = this.props.filters.map(filter => {
          return (
            <Filter key={ filter.category } filter={ filter } selectTab={ this.props.selectTab } style={{display: 'inline-style'}}>
            </Filter>)
          ;
    });

    return (
      <div className="tab-filter-wrapper">
          <div className="tab-filter">
            <ul>
              <li className="placeholder">
                <a data-type="all" href="#0">All</a>
              </li>
              {filterItems}

            </ul>
          </div>
		    </div>
    );
  }
};


export default FilterList;
