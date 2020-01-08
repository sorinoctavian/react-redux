import * as actionTypes from './actionTypes';
import { getToDos } from '../apis/api';

let idCounter = 2;
export const addToDo = (text) => {
    return {
        type : actionTypes.ADD_TODO,
        payload: {
            id: idCounter++,
            content: text,
            checked: false
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

export const selectToDo = (id) => {
    return {
        type: actionTypes.SELECT_TODO,
        payload :  id 
    }
}

export const updateToDo = (toDo) => {
    return {
        type: actionTypes.UPDATE_TODO,
        payload: toDo
    }
}

export const toggleToDo = (id) => {
    return {
        type: actionTypes.TOGGLE_TODO,
        payload :  id 
    }
}

export const getToDoCollection= () => async (dispatch)=>{
    let response = await getToDos();
    dispatch({
        type:actionTypes.GET_TODO_COLLECTION,
        payload:[...response.data]
    });
}