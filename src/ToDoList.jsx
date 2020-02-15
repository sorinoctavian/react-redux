import React from 'react';
import { connect } from 'react-redux'
import * as actions from './features'


class ToDoList extends React.Component {
    state = { content: "" }
    async componentDidMount() {
        this.props.getToDoCollection();

    }
    render() {
        let { toggleToDo, selectToDo, removeToDo, updateToDo, addToDo, selectedToDoId, todos } = this.props;

        return (<React.Fragment>
            <ul>
                {todos.map((todo) => {
                    return (

                        <li
                            key={todo.id}>
                            <input type="checkbox" checked={todo.checked}
                                onChange={() => toggleToDo(todo.id)} />
                            <span onClick={() => { selectToDo(todo.id) }}>{todo.content}</span>
                            <button onClick={() => removeToDo(todo.id)}>X</button>
                        </li>
                    )

                })}
            </ul>
            <input type="text" onChange={(e) => { this.setState({ content: e.target.value }) }} />

            <button onClick={() => { addToDo(this.state.content) }}>Press me</button>
            <div>
                <button onClick={() => {
                    updateToDo({ id: selectedToDoId, content: this.state.content })
                }}>Update Selected</button>
            </div>
            {selectedToDoId === -1 && <div>'no item selected'</div>}
        </React.Fragment>)
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        selectedToDoId: state.selectedToDoId
    }
}

const mapDispatchToProps = {
    addToDo: actions.todoactions.addToDo,
    removeToDo: actions.todoactions.removeToDo,
    selectToDo: actions.selectedactions.select,
    updateToDo: actions.todoactions.updateToDo,
    toggleToDo: actions.todoactions.toggle,
    getToDoCollection: actions.todoactions.getInitialState
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)