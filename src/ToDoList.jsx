import React from 'react';
import { connect } from 'react-redux'

class ToDoList extends React.Component {
    render() {
        return (<React.Fragment>
            <ul>
            {this.props.todos.map((todo) => {
                return <li key={todo.id} >{todo.content}</li>
            })}
            </ul>
        </React.Fragment>)
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(ToDoList)