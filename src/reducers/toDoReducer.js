

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
    if(action.type === 'ADD_TODO')
    {
        return  [...state, action.payload];
    }
    if(action.type === 'REMOVE_TODO')
    {
        const arr = state.filter((item) => { return item.id !== action.payload.id});
        return arr;
    }

    return state;
}

const selectedToDo = (state = initialSelectedToDo, action) => {
    if(action.type === 'SELECT_TODO')
    {
        return action.payload.selectedTodo;
    }

    return state;
}

export default {todos,selectedToDo} ;