import { combineReducers } from 'redux';

import { peopleReducer } from './peopleReducers';

const reducers = combineReducers({
    allPeople: peopleReducer,
});

export default reducers;
