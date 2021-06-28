import { Fragment, Component } from "react";

/**
 * Imports components
 */
import Coin from "../Coin";

/**
 * Imports utils
 */
import { choice } from "../../utils";

/**
 * Defines the props interface
 */
interface CoinContainerProps {
  coins: CoinType[];
}

/**
 * Defines the Coin type
 */
type CoinType = {
  side: string;
  imgSrc: string;
};

/**
 * Defines the state inteface
 */
interface CoinContainerState {
  currCoin: CoinType | null;
  nFlips: number;
  nHeads: number;
  nTails: number;
}

/**
 * Displays the componnent
 */
class CoinContainer extends Component<CoinContainerProps, CoinContainerState> {
  /**
   * Defines the default props
   */
  static defaultProps: CoinContainerProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgSrc:
          "https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL._AC_.jpg"
      }
    ]
  };

  /**
   * Defines the default state
   */
  state: CoinContainerState = {
    currCoin: null,
    nFlips: 0,
    nHeads: 0,
    nTails: 0
  };

  /**
   * Handles flipping the coin
   */
  flipCoin() {
    const newCoin: CoinType = choice(this.props.coins);

    this.setState((prevState) => {
      return {
        currCoin: newCoin,
        nFlips: prevState.nFlips + 1,
        nHeads: prevState.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: prevState.nTails + (newCoin.side === "tails" ? 1 : 0)
      };
    });
  }

  /**
   * Handles the submit
   */
  handleClick() {
    this.flipCoin();
  }

  render() {
    return (
      <Fragment>
        <h2>Flip a coin</h2>
        {this.state.currCoin && <Coin data={this.state.currCoin} />}
        <button onClick={() => this.handleClick()}>Flip it</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </p>
      </Fragment>
    );
  }
}

export default CoinContainer;
