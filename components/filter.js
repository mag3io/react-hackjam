import React, { Component } from 'react';


class Filter extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    filter : React.PropTypes.shape({
      category: React.PropTypes.string.isRequired,
      selected: React.PropTypes.bool.isRequired
    }),
    selectTab: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <li key={ this.props.filter.category } onClick={ this.props.selectTab.bind(null, this.props.filter.category) } style={{display: 'inline-style'}}>
        <a className={this.props.filter.selected? 'selected': ''} href="#0">{this.props.filter.category}</a>
      </li>
    );
  }

};

export default Filter;
