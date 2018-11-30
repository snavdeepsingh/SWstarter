import React from "react";
import './DisplayResults.css';


 const DisplayResults = (props) =>{
    return(
      <div className='ResultsDiv'>
        <div className='row'>
          <div className='col-sm-12'>
          <h1 className='Display-name' >{props.name}</h1>
          <button className='SEE-DETAILS Rectangle-21' >SEE DETAILS</button>
          <hr style={{clear:'both', margin:'18px'}}/>
          </div>
        </div>
      </div>
    ) 
  }

  export default DisplayResults;
