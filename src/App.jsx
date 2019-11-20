import React from 'react';

import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';

export class App extends React.Component {
  render() {
    return (
      <div>
        <AddToDo />
        <ToDoList />
      </div>
    );
  }
}
