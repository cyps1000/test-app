import { Component } from "react";

/**
 * External Imports
 */
import axios from "axios";

/**
 * Imports Styling
 */
import "./ZenQuote.css";

/**
 * Defines the state interface
 */
interface ZenQuoteProps {
  quote: string;
  isLoaded: boolean;
}

/**
 * Displays the component
 */
class ZenQuote extends Component {
  state: ZenQuoteProps = {
    quote: "",
    isLoaded: false
  };

  async componentDidMount() {
    const { data } = await axios.get("https://api.github.com/zen");
    setTimeout(() => {
      this.setState({ quote: data, isLoaded: true });
    }, 3000);
  }
  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Zen Quote</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className="Loader"></div>
        )}
      </div>
    );
  }
}

export default ZenQuote;
