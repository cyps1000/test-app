import { Component } from "react";

/**
 * Imports utils
 */
import { choice } from "../../utils";

/**
 * Imports styling
 */
import "./Box.css";

/**
 * Defines the props interface
 */
interface BoxProps {
  allColors: string[];
}

/**
 * Defines the state interface
 */
interface BoxState {
  color: string;
}

/**
 * Displays the component
 */
class Box extends Component<BoxProps, BoxState> {
  /**
   * Defines the default props
   */
  static defaultProps: BoxProps = {
    allColors: ["purple", "magenta", "violet", "pink"]
  };

  /**
   * Defines the default state
   */
  state: BoxState = {
    color: choice(this.props.allColors)
  };

  /**
   * Handles picking a random color
   */
  pickColor() {
    let newColor;

    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.color);

    this.setState({ color: newColor });
  }

  /**
   * Handles the click event
   */
  handleClick() {
    this.pickColor();
  }

  render() {
    return (
      <div
        onClick={() => this.handleClick()}
        className="Box"
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}

export default Box;
