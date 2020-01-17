import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const toDo = [
  {
    task: 'have fun',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'eat pizza ',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'play video games',
    id: Date.now(),
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super();
    this.state = {
      todoList: toDo,
    };
  }

  addNewTodo = newTodoName => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { name: newTodoName, taskDone: false, id: Date.now() }
      ]
    }
    this.setState(newState);
  };

  toggleTask = id => {

    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            taskDone: !task.taskDone
          }
        }
        return task;
      })
    }
    this.setState(newState);


  };

  clearTask = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(task => {
        return !task.taskDone;
      })
    }
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoForm addNewTodo={this.addNewTodo} />
        </div>
        <TodoList toDo={this.state.todoList}
          toggleTask={this.toggleTask}
          clearTask={this.clearTask} />
      </div>
    );
  }
}

export default App;
