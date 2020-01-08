import * as actionTypes from '../actions/actionTypes'

const initialSelectedToDoId = -1;
const initialToDos = [
    {
        id: 0,
        content: "TODO 1",
        checked: false
    },
    {
        id: 1,
        content: "TODO 2",
        checked: true
    }];

const todos = (state = initialToDos, action) => {
    console.log(action);
    if (action.type === actionTypes.ADD_TODO) {
        return [...state, action.payload];
    }
    if (action.type === actionTypes.REMOVE_TODO) {
        const arr = state.filter((item) => { return item.id !== action.payload.id });
        return arr;
    }

    if (action.type === actionTypes.UPDATE_TODO) {
        return state.map((todo) => {
            if (todo.id !== action.payload.id) {
                return todo
            }

            return {...action.payload }
        })
    }

    if (action.type === actionTypes.TOGGLE_TODO) {
        return state.map((todo) => {
            if (todo.id !== action.payload) {
                return todo
            }
            return { ...todo, checked: !todo.checked }
        })
    }

    return state;
}


const selectedToDoId = (state = initialSelectedToDoId, action) => {
    if (action.type === actionTypes.SELECT_TODO) {
        return action.payload;
    }
   
    return state;
}

export default { todos, selectedToDoId };