import React, { Component } from "react";
import uuid from "uuid/v4";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.renderTodoList = this.renderTodoList.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  renderTodoList() {
    return this.state.todos.map(todo => <Todo {...todo} key={todo.id} removeTodo={this.removeTodo} />);
  }

  addTodo(todo) {
    let newTodo = { ...todo, id: uuid() };
    this.setState(state => {
      return {
        todos: [...state.todos, newTodo]
      };
    });
  }

  removeTodo(id) {
    this.setState(state => {
      return {
        todos: state.todos.filter(todo => todo.id !== id)
      };
    });
  }

  render() {
    return (
      <div>
        <h2>New Todo Form:</h2>
        <NewTodoForm addTodo={this.addTodo}/>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {this.renderTodoList()}
        </div>
      </div>
    );
  }
}

export default TodoList;
