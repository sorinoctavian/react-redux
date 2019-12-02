import axios from 'axios';

const fetchAll = async () => {
    const todos = await axios.get('http://localhost:3004/todos');
    return todos.data;
}

export default {
    fetchAll
}