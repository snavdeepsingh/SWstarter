import React, {Component} from 'react';
import Button from '../Button/Button';
import './SearchContainer.css';

export default class SearchContainer extends Component {
    render() {
      return(
        <div className='SearchContainer'>
          <p className='What-are-you-searching-for'>What are you searching for?</p>
          <form className='form'>
          <input  className='Ellipse-2 People' type="radio" name="type" value="people" /><strong>People</strong> 
          <input className='Ellipse-2 Movies' type="radio" name="type" value="movies" /><strong>Movies</strong><br></br>
          <input className='Rectangle eg-Chewbacca-Yoda-Boba-Fett' type="text" placeholder="e.g. Chewbacca, Yoda, Boba Fett" />
          <Button purpose='SEARCH' isInput={true} />
          </form>
         
        </div>
      ) 
    }
  };