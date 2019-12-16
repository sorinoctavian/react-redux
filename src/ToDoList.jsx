import React from 'react';
import { connect } from 'react-redux'
import { addToDo } from './actions'

class ToDoList extends React.Component {
    state = {content: ""}
    render() {
        return (<React.Fragment>
            <ul>
            {this.props.todos.map((todo) => {
                return <li key={todo.id} >{todo.content}</li>
            })}
            </ul>
        <input type="text" onChange={(e) => {this.setState({content: e.target.value})}}/>
        <button onClick={()=> {this.props.addToDo(this.state.content)}}>Press me</button>
        </React.Fragment>)
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {addToDo})(ToDoList)