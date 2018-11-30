import React from 'react';
import './CharacterDetails.css';
import { Link } from 'react-router-dom';

const CharacterDetails = () => {
      return(
        <div className='DetailsBG'>
          <div >
            <div className='title'>
              <h1  >Results</h1>
            </div>
          
          <div className='row'>
            <div className='sub-title col-sm-5'>
              <h4>Details</h4>
              <hr />
            </div>
            <div className='sub-title col-sm-5'>
              <h4>Movies</h4>
              <hr />
            </div>
          </div>
          </div>
          <button className='Rectangle-22' > <Link className='BACK-TO-SEARCH' to='/' >BACK TO SEARCH</Link></button>
        </div>
      )
  };

  export default CharacterDetails;