import React from "react";
import { Link } from 'react-router-dom';
import './DisplayResults.css';


 const DisplayResults = (props) =>{
    return(
      <div className='ResultsDiv'>
        <div className='row'>
          <div className='col-sm-12'>
          <h1 className='Display-name' >{props.name}</h1>
          <button className='Rectangle-21' {...props} ><Link className='SEE-DETAILS' to='/character' >SEE DETAILS</Link></button>
          <hr style={{clear:'both', margin:'18px'}}/>
          </div>
        </div>
      </div>
    ) 
  }

  export default DisplayResults;
