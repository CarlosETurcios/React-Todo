import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';

const toDoList = [
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
      TodoList: toDoList,
    };
  }




  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
