import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './features/todosSlice';
import selectedToDoIdSlice from './features/selectedToDoIdSlice';

const rootReducer = combineReducers({
    todos: todosSlice,
    selectedToDoId: selectedToDoIdSlice,
})

export default configureStore({ reducer: rootReducer });
