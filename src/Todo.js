import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      task: this.props.task,
      id: this.props.id
    };
    this.editTodo = this.editTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  editTodo() {
    this.setState({
      isEditable: true
    });
  }

  updateTodo() {
    this.props.updateTodo({ task: this.state.task, id: this.state.id });
    this.setState({
      isEditable: false
    });
  }

  handleChange(evt) {
    this.setState({
      task: evt.target.value
    });
  }

  render() {
    let renderData = (
      <div>
        <div
          style={this.props.isDone ? { textDecoration: "line-through" } : {}}
          onClick={() => this.props.updateTodoStatus(this.props.id)}
        >
          {" "}
          {this.props.task}
        </div>
        <button onClick={this.editTodo}>Edit</button>
        <button onClick={() => this.props.removeTodo(this.props.id)}>x</button>
      </div>
    );
    if (this.state.isEditable) {
      renderData = (
        <div>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button onClick={this.updateTodo} id={this.props.id}>
            Save
          </button>
        </div>
      );
    }

    return renderData;
  }
}

export default Todo;
