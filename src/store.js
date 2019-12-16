import { createStore, compose, combineReducers } from 'redux';
import todos from './reducers/toDoReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export default createStore(combineReducers(todos), composeEnhancers());
