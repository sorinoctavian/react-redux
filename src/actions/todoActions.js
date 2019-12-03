import { ADD_TODO, FILTER_TODO, TOGGLE_TODO, FETCH_TODOS, DELETE_TODO } from "./actionTypes";
import todosApi from '../apis/todos';

let todoIndex = 0;

export const addTodo = content => {
    return {
        type: ADD_TODO,
        payload: {
            id: ++todoIndex,
            content,
            done: false
        }
    }
}

export const filterTodo = filter => {
    return {
        type: FILTER_TODO,
        payload: {
            filter
        }
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
}

export const fetchTodos = id => async dispatch => {
    const todos = await todosApi.fetchAll(id);
    dispatch({ type: FETCH_TODOS, payload: todos })
}
