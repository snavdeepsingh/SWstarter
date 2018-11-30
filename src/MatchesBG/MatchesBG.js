import React from 'react';
import './MatchesBG.css';
import DisplayResults from '../DisplayResults/DisplayResults';
import { connect } from 'react-redux';

function MatchesBG(props) {
      return(
        <div className='MatchesBG Results'>
          <h1 className='Results' >Results</h1>
          <hr style={{margin:'18px'}}/> 
            <ul >
              {props.people.map((people, i) => {
                console.log('DisplayResults',people.name)
                return <DisplayResults key={i} name={people.name ? people.name : people.title}/>
              })}
            </ul>
         
          {props.people.length > 0 ? <p></p> : <div className='There-are-zero-matches-Use-the-form-to-search-for'>
            <p >There are zero matches.</p>
            <p>Use the form to search for People or Movies.</p>
          </div>}
          
        </div>
      ) 
  };

  function mapStateToProps (state) {
    return {
      people: state.people,
    }
  }
  

  export default connect(mapStateToProps)(MatchesBG);