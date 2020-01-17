
import React from "react";

const Todo = props => {
    return (
        <div onClick={event => props.toggleTask(props.task.id)}
            className={`task${props.task.taskDone ? "taskDone" : ""}`}>

            <p>{props.task.name}</p>

        </div>
    );
}

export default Todo;

