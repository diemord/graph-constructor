import { createStore, combineReducers } from 'redux';

import studentsListReducer from '../reducers/student-list-reducer.js';
const reducers = combineReducers({
  studentsListState: studentsListReducer
});

const store = createStore(reducers);

export default store;