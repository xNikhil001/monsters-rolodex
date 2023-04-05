import React, { Component } from "react";
import './search-box.styles.css'
export default class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <div>
        <input
          className={`search-box ${className}`}
          type="search"
          name="query"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}
