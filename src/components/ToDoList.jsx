import React from 'react';
import { connect } from 'react-redux';

import ToDo from './ToDo';
import {deleteTodo} from '../actions';

class ToDoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.allIds &&
                    this.props.todos.allIds.map((id, index) => (
                        <div key={id}>
                            <ToDo todo={this.props.todos.byIds[id]} />
                            <button onClick={() => this.props.deleteTodo(id)}>x</button>
                        </div>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { todos: state.todos };
}

export default connect(mapStateToProps, { deleteTodo })(ToDoList);