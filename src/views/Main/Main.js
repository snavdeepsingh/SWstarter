import React, { Component } from "react";
import SearchContainer from '../../SearchContainer/SearchContainer';
import MatchesBG from '../../MatchesBG/MatchesBG';

export default class Home extends Component {
  render() {
    return(
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-4'>
            <SearchContainer />
          </div>
          <div className='col-sm-8'>
            <MatchesBG />
          </div>
        </div>
        
       
      </div>
    ) 
  }
}
