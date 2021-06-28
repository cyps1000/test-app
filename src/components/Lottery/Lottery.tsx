import { Component } from "react";

/**
 * Imports components
 */
import Ball from "../Ball";

/**
 * Imports styling
 */
import "./Lottery.css";

/**
 * Defines the props interface
 */
interface LotteryProps {
  title: string;
  maxBalls: number;
  maxNum: number;
}

/**
 * Defines the state interface
 */
interface LotteryState {
  nums: number[];
}

/**
 * Displays the component
 */
class Lottery extends Component<LotteryProps, LotteryState> {
  /**
   * Defines the default props
   */
  static defaultProps: LotteryProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 49
  };

  /**
   * Defines the default state
   */
  state: LotteryState = {
    nums: Array.from({ length: this.props.maxBalls })
  };

  /**
   * Handles generating new numbers
   */
  generate() {
    this.setState((curState) => ({
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  }

  /**
   * Handles the submit
   */
  handleClick() {
    this.generate();
  }

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((n, i) => (
            <Ball key={i} num={n} />
          ))}
        </div>
        <button onClick={() => this.handleClick()}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
