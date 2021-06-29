import { Component } from "react";

/**
 * External imports
 */
import { v4 as uuid } from "uuid";

/**
 * Imports Styling
 */
import "./TodoForm.css";

/**
 * Defines the props interface
 */
interface TodoFormProps {
  createTodo: (task: TodoFormState) => void;
}

/**
 * Defines the state interface
 */
interface TodoFormState {
  task: string;
  id: string;
  completed: boolean;
}

/**
 * Displays the component
 */
class TodoForm extends Component<TodoFormProps> {
  /**
   * Defines the default state
   */
  state: TodoFormState = {
    task: "",
    id: "",
    completed: false
  };

  /**
   * Handles the form input events
   */
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  /**
   * Handles submitting the form
   */
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: "" });
  };

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Task</label>
        <input
          id="task"
          name="task"
          type="text"
          placeholder="New Task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
