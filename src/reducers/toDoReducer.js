import * as actionTypes from '../actions/actionTypes'

const initialSelectedToDo = {};
const initialToDos = [
    {
        id: 0,
        content: "TODO 1"
    },
    {
        id: 1,
        content: "TODO 2"
    }];

const todos = (state = initialToDos, action) => {
    console.log(action);
    if(action.type === actionTypes.ADD_TODO)
    {
        return  [...state, action.payload];
    }
    if(action.type === actionTypes.REMOVE_TODO)
    {
        const arr = state.filter((item) => { return item.id !== action.payload.id});
        return arr;
    }

    return state;
}

const selectedToDo = (state = initialSelectedToDo, action) => {
    if(action.type === actionTypes.SELECT_TODO)
    {
        return action.payload;
    }

    return state;
}

export default {todos,selectedToDo} ;