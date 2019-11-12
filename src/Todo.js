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
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  editTodo() {
    this.setState({
      isEditable: true
    });
  }

  handleUpdate() {
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

  handleRemove() {
    this.props.removeTodo(this.props.id);
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
        <button onClick={this.handleRemove}>x</button>
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
          <button onClick={this.handleUpdate}>Save</button>
        </div>
      );
    }

    return renderData;
  }
}

export default Todo;
