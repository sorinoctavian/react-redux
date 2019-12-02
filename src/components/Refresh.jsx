import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';

class Refresh extends React.Component {
    render() {
        return (
            <div>
                <h3>Refresh</h3>
                <button
                    onClick={this.props.fetchTodos}
                >Refresh</button>
            </div>
        );
    }
}

export default connect(null, {
    fetchTodos
})(Refresh)