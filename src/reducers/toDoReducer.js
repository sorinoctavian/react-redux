
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
    console.log(state);
    return state;
}

export default todos;