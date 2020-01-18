import React from "react";
import { FormCard } from './ToDoSyling/toDoStyling'
import { Button } from "./ToDoSyling/toDoStyling";
class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newTodo: ""
        };
    }
    handleChanges = e => {
        this.setState({ ...this.state, newTodo: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo)
    };

    render() {

        return (
            <FormCard>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChanges}
                            type="text"
                            name="Todo"
                            value={this.state.newTodo} />



                        <Button>Add</Button>

                    </form>

                </div>
            </FormCard>
        )
    }
}

export default TodoForm;