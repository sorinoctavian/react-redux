import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';

class ToDo extends React.Component {
    render() {
        const { content, done, id } = this.props.todo;
        return (
            <div>
                <div>task: {content}
                    <span><input type='checkbox' checked={done} onChange={() => this.props.toggleTodo(id)} /></span>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { toggleTodo }
)(ToDo);