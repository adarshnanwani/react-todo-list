import React, { Component } from "react";
import './Todo.css';

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
      <div className="Todo">
        <li
          className={this.props.isDone ? "Todo-task completed" : "Todo-task"}
          onClick={() => this.props.updateTodoStatus(this.props.id)}
        >
          {" "}
          {this.props.task}
        </li>
        <div className="Todo-buttons">
          <button onClick={this.editTodo}>
            <i className="fa fa-pencil" />
          </button>
          <button onClick={this.handleRemove}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </div>
    );
    if (this.state.isEditable) {
      renderData = (
        <div className="Todo">
          <form className="Todo-edit-form">
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button onClick={this.handleUpdate}>Save</button>
          </form>
        </div>
      );
    }

    return renderData;
  }
}

export default Todo;
