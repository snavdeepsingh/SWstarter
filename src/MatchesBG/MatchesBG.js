import React, {Component} from 'react';
import './MatchesBG.css';
import DisplayResults from '../DisplayResults/DisplayResults';

export default class MatchesBG extends Component {
    render() {
      return(
        <div className='MatchesBG Results'>
          <h1 className='Results' >Results</h1>
          <hr style={{margin:'18px'}}/>
          <DisplayResults name="OBI Wan Kanobi"/>
          <div className='There-are-zero-matches-Use-the-form-to-search-for'>
            <p >There are zero matches.</p>
            <p>Use the form to search for People or Movies.</p>
          </div>
        </div>
      ) 
    }
  };