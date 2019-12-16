import {ADD_TODO} from './actionTypes'

let idCounter = 2;
export const addToDo = (text) => {
    return {
        type : ADD_TODO,
        payload: {
            id: idCounter++,
            content: text
        }
    }
}