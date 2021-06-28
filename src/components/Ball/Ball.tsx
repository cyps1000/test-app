import { Component } from "react";

/**
 * Imports Styling
 */
import "./Ball.css";

/**
 * Defines the props interface
 */
interface BallProps {
  num: number;
}

/**
 * Displays the component
 */
class Ball extends Component<BallProps> {
  render() {
    return <div className="Ball">{this.props.num}</div>;
  }
}

export default Ball;
