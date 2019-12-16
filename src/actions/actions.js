import * as actionTypes from './actionTypes';

let idCounter = 2;
export const addToDo = (text) => {
    return {
        type : actionTypes.ADD_TODO,
        payload: {
            id: idCounter++,
            content: text
        }
    }
}

export const removeToDo = (id) => {
    return {
        type: actionTypes.REMOVE_TODO,
        payload: {
            id
        }
    }
}