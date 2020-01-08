import * as actionTypes from './actionTypes';

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

export const getToDoCollection=()=>{
    return{
        type:actionTypes.GET_TODO_COLLECTION,
        payload:[{
            id: 0,
            content: "TODO 1",
            checked: false
        },
        {
            id: 1,
            content: "TODO 2",
            checked: true
        }]
    }
}