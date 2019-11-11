import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    this.props.addTodo(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Task:</label>
          <input
            type="text"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add Task!</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
