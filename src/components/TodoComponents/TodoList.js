// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from "../TodoComponents/Todo";


const TodoList = props => {

    return (

        <div className="todo-list">

            {props.toDo.map(task => (
                <Todo key={task.id}
                    task={task}
                    toggleTask={props.toggleTask}
                />

            ))}
            <button className="clear-button" onClick={props.clearTask}>
                Clear
            </button>
        </div>
    )
}
export default TodoList;