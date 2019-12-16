import { createStore } from 'redux';
import todos from './reducers/toDoReducer'

export default createStore(todos);
