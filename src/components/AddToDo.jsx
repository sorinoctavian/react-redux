import React from 'react';
import {connect} from 'react-redux';

import { addTodo } from '../actions'

class AddToDo extends React.Component {
    state = { todoContent: '' }

    render() {
        return (
            <div>
                <div><input onChange={e => this.setState({ todoContent: e.target.value })}/></div>
                <div><button onClick={() => this.props.addTodo(this.state.todoContent, 'medium')}>add</button></div>
            </div>
        );
    }
}

export default connect(
    null,
    { addTodo }
)(AddToDo);