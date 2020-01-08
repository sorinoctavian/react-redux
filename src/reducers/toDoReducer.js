import * as actionTypes from '../actions/actionTypes'

const initialSelectedToDoId = -1;
const initialToDos = [];

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

            return { ...action.payload }
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

    if (action.type === actionTypes.GET_TODO_COLLECTION) {
        return [ ...action.payload ]
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