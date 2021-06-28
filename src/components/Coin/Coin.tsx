import { Component } from "react";

/**
 * Imports styling
 */
import "./Coin.css";

/**
 * Defines the props interface
 */
interface CoinProps {
  data: {
    side: string;
    imgSrc: string;
  };
}

/**
 * Displays the component
 */
class Coin extends Component<CoinProps> {
  render() {
    return (
      <div className="Coin">
        <img src={this.props.data.imgSrc} alt={this.props.data.side} />
      </div>
    );
  }
}

export default Coin;
