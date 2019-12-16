
const initialState = {
    todos: [
        {
            id: 0,
            content: "TODO 1"
        },
        {
            id: 1,
            content: "TODO 2"
        }]
}

const todos = (state = initialState, action) => {
    console.log(action);
    if(action.type === 'ADD_TODO')
    {
        return {todos: [...state.todos, action.payload]};
    }
    if(action.type === 'REMOVE_TODO')
    {
        const arr = state.todos.filter((item) => { return item.id !== action.id});
        return {todos: arr}
    }

    return state;
}

export default todos;