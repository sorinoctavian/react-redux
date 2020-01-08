import axios from 'axios';

export const getToDos = async ()  => {
    let response = await axios.get('http://localhost:3004/todos');
    return response;
}