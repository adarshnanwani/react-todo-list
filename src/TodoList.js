import React, { Component } from "react";
import uuid from "uuid/v4";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

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
    this.updateTodoStatus = this.updateTodoStatus.bind(this);
  }

  renderTodoList() {
    return this.state.todos.map(todo => (
      <Todo
        {...todo}
        key={todo.id}
        removeTodo={this.removeTodo}
        updateTodo={this.updateTodo}
        updateTodoStatus={this.updateTodoStatus}
      />
    ));
  }

  addTodo(todo) {
    let newTodo = { ...todo, id: uuid(), isDone: false };
    this.setState(state => {
      return {
        todos: [...state.todos, newTodo]
      };
    });
  }

  updateTodo(newTodo) {
    const todos = [...this.state.todos];
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
  updateTodoStatus(id) {
    const todos = [...this.state.todos];

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) todo.isDone = !todo.isDone;
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    return (
      <div className="TodoList">
        <h1>
          Todo List <span>A simple React Todo list</span>
        </h1>
        {this.renderTodoList()}
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
