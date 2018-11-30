import React from 'react';
import './CharacterDetails.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CharacterDetails = (props) => {
        const newIndex = props.index;
      return(
        
        <div>
          {props.Option ==='movies' ? 
           <div className='DetailsBG'>
           <div >
             <div className='title'>
               <h1  >{props.people[newIndex].title}</h1>
             </div>
           
           <div className='row'>
             <div className='col-sm-5'>
               <h4 className='sub-title'>Opening Crawl</h4>
               <hr />
               <div className='Opening-Crawl'>
                <p>{props.people[newIndex].opening_crawl}</p>
               </div>
             </div>
             <div className='col-sm-5'>
               <h4 className='sub-title'>Characters</h4>
               <hr />
               <div className='Opening-crawl'>{props.people[newIndex].characters.map((characters,i)=> {
                 // eslint-disable-next-line
                 return <div key={i}><a  href={characters} ></a></div>
               })}</div>
             </div>
           </div>
           </div>
           <button className='Rectangle-22' > <Link className='BACK-TO-SEARCH' to='/' >BACK TO SEARCH</Link></button>
         </div> : props.Option === 'people' ?
        <div className='DetailsBG'>
        <div >
          <div className='title'>
            <h1  >{props.people[newIndex].name}</h1>
          </div>
        
        <div className='row'>
        <div className='col-sm-5'>
               <h4 className='sub-title'>Details</h4>
               <hr />
               <div className='Detail_Character'>
                  <p>Birth Year: {props.people[newIndex].birth_year}<br></br>
                     Gender: {props.people[newIndex].gender}<br></br>
                     Eye Color: {props.people[newIndex].eye_color}<br></br>
                     Hair Color: {props.people[newIndex].hair_color}<br></br>
                     Height: {props.people[newIndex].height}<br></br>
                     Mass: {props.people[newIndex].mass}</p>
               </div>
               
        </div>
       <div className='col-sm-5'>
               <h4 className='sub-title'>Movies</h4>
               <hr />
               <p></p>
       </div>
        </div>
        </div>
        <button className='Rectangle-22' > <Link className='BACK-TO-SEARCH' to='/' >BACK TO SEARCH</Link></button>
      </div> : 
    <div> </div>}
        </div>
      )
  };

  function mapStateToProps(state){
    return {
      people: state.people,
      index: state.index,
      Option: state.Option
    }
  }


  export default connect(mapStateToProps)(CharacterDetails) ;