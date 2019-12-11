import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { addTodo } from '../actions'

class AddToDo extends React.Component {
    state = { todoContent: '' }

    renderInput = ({ input, label, meta }) => {
        return (
            <label>
                {label}
                <input {...input} />
                {this.renderError(meta)}
            </label>
        );
    }

    renderError({ error }) {
        return (
            error &&
            <ol>errors
                {error.map((p, index) => <li key={index}>{p}</li>)}
            </ol>
        )
    }

    onSubmit = formValues => {
        this.props.addTodo(formValues.todoContent)
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <div>
                    <Field
                        name='todoContent'
                        label='todo content'
                        component={this.renderInput}
                    />
                </div>
                <div><button>add</button></div>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.todoContent) {
        errors.todoContent = ['Please enter todo content'];
    }

    return errors;
}

const form = reduxForm({
    form: 'todoForm',
    validate
})(AddToDo)

export default connect(
    null,
    { addTodo }
)(form);