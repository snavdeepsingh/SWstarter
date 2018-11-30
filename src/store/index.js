import { createStore } from 'redux';

const initialState = {
    people : [],
    inputSearch : '',
    Option: '',
};

const reducer = (state = initialState, action) => {
    console.log('reducer running', action);

    switch (action.type){
        case 'INPUT_CHANGE':
        return Object.assign({}, state, {inputSearch: action.text, Option: action.Option});
        case 'SUBMIT':
        return Object.assign({}, state, {people: action.people})
        case 'OPTION_CHANGE':
        return Object.assign({}, state, {Option: action.Option})
        default:
        return state;
    }
}

const store = createStore(reducer);

export default store;