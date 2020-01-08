import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import todos from './reducers/toDoReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export default createStore(combineReducers(todos), composeEnhancers(applyMiddleware(thunk)));
