import React from "react";

const Todo = props => (
  <div>
    {props.task} <button onClick={() => props.removeTodo(props.id)}>x</button>
  </div>
);

export default Todo;
