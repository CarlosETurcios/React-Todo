// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Task from "./components/TodoComponents/Todo";


const TodoList = props => {

    return (

        <div className="todo-list">
            {props.TodoList.map(task => (
                <Task key={task.id}
                    task={task}
                    toggleTask={props.toggleTask}
                />

            ))}
            <button className="clear-button" onClick={props.clearTask}>Clear</button>

        </div>
    )



}
export default TodoList;