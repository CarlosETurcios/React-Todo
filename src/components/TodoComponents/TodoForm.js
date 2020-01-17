import React from "react";


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
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChanges}
                        type="text"
                        name="Todo"
                        value={this.state.newTodo} />



                    <button>Add</button>

                </form>

            </div>
        )
    }
}

export default TodoForm;