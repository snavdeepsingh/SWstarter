import React, {Component} from 'react';
import './MatchesBG.css';

export default class MatchesBG extends Component {
    render() {
      return(
        <div className='MatchesBG Results'>
          <h1 className='Results' >Results</h1>
          <hr style={{margin:'18px'}}/>
          <div className='There-are-zero-matches-Use-the-form-to-search-for'>
            <p >There are zero matches.</p>
            <p>Use the form to search for People or Movies.</p>
          </div>
        </div>
      ) 
    }
  };