import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import './SearchContainer.css';
import API from '../utils/API';

 function SearchContainer(props){
        const radioOption = props.Option;
        console.log('Hello', Option);
      return(
        <div className='SearchContainer'>
          <p className='What-are-you-searching-for'>What are you searching for?</p>
          <form className='form' onSubmit={(e) => props.Submit(e,props.inputSearch,props.Option)}>
          <input  className='Ellipse-2 People' name='radio' type="radio"  onChange={(ev)=>props.handleOptionChange(ev)} checked={props.Option === 'people'} value="people" /><strong>People</strong> 
          <input className='Ellipse-2 Movies' name='radio' type="radio" value="movies" onChange={(ev)=>props.handleOptionChange(ev)} checked={props.Option === 'movies'} /><strong>Movies</strong><br></br>
          <input value = {props.inputSearch} onChange={(e)=>props.inputChange(e,radioOption)} className='Rectangle eg-Chewbacca-Yoda-Boba-Fett' type="text" placeholder="e.g. Chewbacca, Yoda, Boba Fett" />
          <Button purpose='SEARCH' isInput={props.inputSearch ? true : false} />
          </form>
         
        </div>
      ) 
  };

  function mapStateToProps(state){
    console.log('mapStateToProps', state);
    return {
      inputSearch: state.inputSearch,
      people: state.people,
      Option: state.Option,
    }
  }

  function mapDispatchToProps(dispatch){
    console.log('mapDipatchToProps');

    return {
      inputChange: (e,Option) => {
        const action = ({type: 'INPUT_CHANGE', text: e.target.value, Option: Option});
        dispatch(action);
      },

      Submit: (e,query,Option) => {
          e.preventDefault();

          API.getAxios(dispatch,query,Option);

          console.log('submit fired');
      },

      handleOptionChange: (ev) => {
        const action = ({type: 'OPTION_CHANGE', Option: ev.target.value} )
        dispatch(action);
        console.log('Option selected', action.Option);
      }
    }
  }




  export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);