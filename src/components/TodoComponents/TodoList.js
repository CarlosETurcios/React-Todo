// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from "../TodoComponents/Todo";
import { TodoListStyling } from "./ToDoSyling/toDoStyling"
import { Button } from "./ToDoSyling/toDoStyling"

const TodoList = props => {

    return (

        <div className="todo-list">

            {props.toDo.map(task => (

                <Todo key={task.id}
                    task={task}
                    toggleTask={props.toggleTask}
                />

            ))}

            <TodoListStyling>
                <Button className="clear-button" onClick={props.clearTask}>
                    Clear
            </Button>
            </TodoListStyling >
        </div>

    )
}
export default TodoList;