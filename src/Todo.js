import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.task}{" "}
        <button onClick={() => this.props.removeTodo(this.props.id)}>x</button>
      </div>
    );
  }
}

export default Todo;
