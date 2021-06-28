import { Component } from "react";

/**
 * Imports components
 */
import Die from "../Die";

/**
 * Imports Styling
 */
import "./RollDice.css";

/**
 * Defines the props interface
 */
interface RollDiceProps {
  sides: string[];
}

/**
 * Defines the state interface
 */
interface RollDiceState {
  die1: string;
  die2: string;
  rolling: boolean;
}

/**
 * Displays the component
 */
class RollDice extends Component<RollDiceProps> {
  /**
   * Defines the default props
   */
  static defaultProps: RollDiceProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };

  /**
   * Initial state
   */
  state: RollDiceState = {
    die1: "one",
    die2: "one",
    rolling: false
  };

  /**
   * Handles rolling the dice
   */
  roll() {
    const newDie1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDie2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    this.setState({ die1: newDie1, die2: newDie2, rolling: true });

    /**
     * Wait one second, then set rolling to false
     */
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button disabled={this.state.rolling} onClick={() => this.roll()}>
          {this.state.rolling ? "Rolling.." : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default RollDice;
