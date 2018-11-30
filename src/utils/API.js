import axios from 'axios';

function getAxios(dispatch, query,Option){
        console.log("API Option", Option);
    if (Option === 'people'){
        axios.get(`https://swapi.co/api/people/?search=${query}`)
        .then((response)=> {
            console.log('axios',response.data)
        dispatch( {type: "SUBMIT", people: response.data.results})
        })
        
    } else if (Option === 'movies'){
        console.log(" API again Option", Option);
        axios.get(`https://swapi.co/api/films/?search=${query}`)
        .then((response)=> {
            // console.log('axios',response.data.results[0].name)
        dispatch( {type: "SUBMIT", people: response.data.results})
        })
    }

   
}

export default {
    getAxios
}