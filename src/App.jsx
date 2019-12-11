import React from 'react';

import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import Refresh from './components/Refresh';

export class App extends React.Component {
  render() {
    return (
      <div>
        <AddToDo />
        <ToDoList />
        <Refresh />
      </div>
    );
  }
}
