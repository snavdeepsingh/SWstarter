import React, { Component } from "react";
import Header from './Header/Header.js';
import SearchContainer from './SearchContainer/SearchContainer';

export default class Home extends Component {
  render() {
    return(
      <div className='container'>
        <Header />
        <SearchContainer />
      </div>
    ) 
  }
}
