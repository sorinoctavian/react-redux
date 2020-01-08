import axios from 'axios';

export const getToDos = async ()  => {
    let response = await axios.get('http://localhost:3004/todos');
    return response;
}

export const postToDo = async (todo) => {
    let response = await axios.post('http://localhost:3004/todos', todo);
    return response;
}