
import React from "react";
import { List } from "./ToDoSyling/toDoStyling"
const Todo = props => {

    return (
        <List style={props.task.taskDone ? { textDecoration: 'line-through' } : null} onClick={event => props.toggleTask(props.task.id)}
            className={`task${props.task.taskDone ? "taskDone" : ""}`}>

            <p>{props.task.name}</p>


        </List>
    );
}

export default Todo;

