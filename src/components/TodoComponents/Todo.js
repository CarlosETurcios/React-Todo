
import React from "react";

const Task = props => {
    <div onClick={event => props.toggleToDo(props.task.id)}
        className={`task${props.task.name ? "taskDone" : ""}`}>

        <p>{props.task.name}</p>

    </div>
}

export default Task

