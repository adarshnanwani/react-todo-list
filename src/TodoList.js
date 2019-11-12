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
    this.updateTodo = this.updateTodo.bind(this);
  }

  renderTodoList() {
    return this.state.todos.map(todo => (
      <Todo
        {...todo}
        key={todo.id}
        removeTodo={this.removeTodo}
        updateTodo={this.updateTodo}
      />
    ));
  }

  addTodo(todo) {
    let newTodo = { ...todo, id: uuid() };
    this.setState(state => {
      return {
        todos: [...state.todos, newTodo]
      };
    });
  }

  updateTodo(newTodo) {
    const todos = [...this.state.todos];
    let updatedTodo = todos.filter(todo => todo.id === newTodo.id);
    updatedTodo.task = newTodo.task;
    const updatedTodos = todos.map(todo => {
      if (todo.id === newTodo.id) todo = newTodo;
      return todo;
    });
    this.setState({
      todos: updatedTodos
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
        <NewTodoForm addTodo={this.addTodo} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {this.renderTodoList()}
        </div>
      </div>
    );
  }
}

export default TodoList;
