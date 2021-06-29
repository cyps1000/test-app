import { Component } from "react";

/**
 * Imports Styling
 */
import "./Todo.css";

/**
 * Defines the props interface
 */
interface TodoProps {
  task: string;
  id: string;
  completed: boolean;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, updatedTask: string) => void;
}

/**
 * Defines the state interface
 */
interface TodoState {
  isEditing: boolean;
  task: string;
}

/**
 * Displays the component
 */
class Todo extends Component<TodoProps, TodoState> {
  /**
   * Defines the default state
   */
  state: TodoState = {
    isEditing: false,
    task: this.props.task
  };

  /**
   * Handles removing a task when clicked
   */
  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  /**
   * Handles opening the Edit menu
   */
  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  /**
   * Handles updating the task
   */
  handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };

  /**
   * Handles the form input events
   */
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      task: e.target.value
    });
  };

  /**
   * Handles marking the task as completed when clicked
   */
  handleToggle = () => {
    this.props.toggleTodo(this.props.id);
  };

  render() {
    let result;

    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={this.props.completed ? "Todo completed" : "Todo"}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i className="fas fa-pen" />
            </button>
            <button onClick={this.handleRemove}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    }

    return result;
  }
}

export default Todo;
