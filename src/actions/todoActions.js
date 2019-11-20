import { ADD_TODO, FILTER_TODO, TOGGLE_TODO } from "./actionTypes";

let todoIndex = 0;

export const addTodo = (content, priority) => {
    return {
        type: ADD_TODO,
        payload: {
            id: ++todoIndex,
            content,
            priority,
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