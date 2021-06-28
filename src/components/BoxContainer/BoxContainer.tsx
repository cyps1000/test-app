import { Component } from "react";

/**
 * Imports components
 */
import Box from "../Box";

/**
 * Imports styling
 */
import "./BoxContainer.css";

/**
 * Defines the props interface
 */
interface BoxContainerProps {
  numBoxes: number;
}

/**
 * Displays the component
 */
class BoxContainer extends Component<BoxContainerProps> {
  /**
   * Defines the default props
   */
  static defaultProps: BoxContainerProps = {
    numBoxes: 18
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box />
    ));

    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer;
