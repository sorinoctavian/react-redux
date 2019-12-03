import axios from 'axios';
import _ from 'lodash';

const fetchAll = id => {
    return _fetchAll(id);
}

const _fetchAll = _.memoize(async (id) => {
    const todos = await axios.get('http://localhost:3004/todos');
    return todos.data;
})

export default {
    fetchAll
}