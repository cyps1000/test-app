import { Component } from "react";

/**
 * Imports component
 */
import Card from "../Card";

/**
 * External Imports
 */
import axios from "axios";

/**
 * Imports Styling
 */
import "./Deck.css";

/**
 * Defines the state interface
 */
interface DeckState {
  deck: DeckResponse | null;
  drawn: CardResponse[];
}

/**
 * Defines the Deck response interface
 */
interface DeckResponse {
  success: boolean;
  deck_id: string;
  remaining: number;
  shuffled: boolean;
}

/**
 * Defines the Card response interface
 */
interface CardResponse {
  id: string;
  image: string;
  name: string;
}

/**
 * Displays the component
 */
class Deck extends Component<{}, DeckState> {
  /**
   * Defines the default state
   */
  state: DeckState = {
    deck: null,
    drawn: []
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/"
    );

    if (data) {
      this.setState({ deck: data });
    }
  }

  /**
   * Handles getting a card
   */
  getCard = async () => {
    try {
      const { data } = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.state.deck!.deck_id}/draw/`
      );
      if (!data.success) throw new Error("No cards remaining");

      if (data) {
        const card = data.cards[0];

        this.setState((st) => ({
          drawn: [
            ...st.drawn,
            {
              id: card.code,
              image: card.image,
              name: `${card.value} of ${card.suit}`
            }
          ]
        }));
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const cards = this.state.drawn.map((c) => (
      <Card image={c.image} alt={c.name} key={c.id} />
    ));

    return (
      <div className="Deck">
        <h1 className="Deck-title">♦ Card Dealer ♦</h1>
        <h2 className="Deck-title subtitle">
          ♦ A little demo made with React ♦
        </h2>
        <button className="Deck-btn" onClick={this.getCard}>
          Get Card
        </button>
        <div className="Deck-cardarea">{cards}</div>
      </div>
    );
  }
}

export default Deck;
