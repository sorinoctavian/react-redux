import React from 'react';
import {connect} from 'react-redux';

import ToDo from './ToDo';

class ToDoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.allIds && this.props.todos.allIds.map((id, index) => {
                    return <ToDo key={id} todo={this.props.todos.byIds[id]}/>
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {todos: state.todos};
}

export default connect(mapStateToProps)(ToDoList);