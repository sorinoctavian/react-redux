
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
        let arr = [];
       for(let i = 0; i< state.todos.length; i++)
       {
            arr.push({...state.todos[i]});
       }
        return {todos: [...arr, action.payload]};
    }

    return state;
}

export default todos;