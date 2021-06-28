import { Component } from "react";

/**
 * Imports Styling
 */
import "./Die.css";

/**
 * Defines the props interface
 */
interface DieProps {
  face: string;
  rolling: boolean;
}

/**
 * Displays the component
 */
class Die extends Component<DieProps> {
  render() {
    return (
      <i
        className={`Die fas fa-dice-${this.props.face} ${
          this.props.rolling ? "shaking" : ""
        }`}
      />
    );
  }
}

export default Die;
