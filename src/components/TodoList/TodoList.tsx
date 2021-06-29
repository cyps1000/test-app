import { Component } from "react";

/**
 * Imports Components
 */
import Todo from "../Todo";
import TodoForm from "../TodoForm";

/**
 * Imports Styling
 */
import "./TodoList.css";

/**
 * Defines the props state
 */
interface TodoListProps {}

/**
 * Defines the state interface
 */
interface TodoListState {
  todos: TodoType[];
}

/**
 * Defines the Todo type
 */
type TodoType = {
  task: string;
  id: string;
  completed: boolean;
};

/**
 * Displays the component
 */
class TodoList extends Component<TodoListProps, TodoListState> {
  /**
   * Defines the default state
   */
  state: TodoListState = {
    todos: []
  };

  /**
   * Handles creating a task
   */
  create = (task: TodoType) => {
    this.setState({
      todos: [...this.state.todos, task]
    });
  };

  /**
   * Handles removing a task
   */
  remove = (id: string) => {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id)
    });
  };

  /**
   * Handles updating a task
   */
  update = (id: string, updatedTask: string) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  /**
   * Handles marking the task as completed
   */
  toggleCompletion = (id: string) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          task={todo.task}
          id={todo.id}
          completed={todo.completed}
          removeTodo={this.remove}
          updateTodo={this.update}
          toggleTodo={this.toggleCompletion}
        />
      );
    });

    return (
      <div className="TodoList">
        <h1>
          Todo List <span>A Simple React Todo List App</span>
        </h1>
        <ul>{todos}</ul>
        <TodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
