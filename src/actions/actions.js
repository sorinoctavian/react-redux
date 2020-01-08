import * as actionTypes from './actionTypes';
import { getToDos, postToDo } from '../apis/api';

export const addToDo =(text) => async (dispatch)=>{
    let newToDo = {
        content: text,
        checked: false
    };
    let response = await postToDo(newToDo);
    dispatch ({
        type : actionTypes.ADD_TODO,
        payload: response.data
    });
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