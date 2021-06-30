import { Component } from "react";

/**
 * Imports Styling
 */
import "./Card.css";

/**
 * Defines the props interface
 */
interface CardProps {
  image: string;
  alt: string;
}

/**
 * Displays the component
 */
class Card extends Component<CardProps, {}> {
  private _transform: string;
  constructor(props: CardProps) {
    super(props);
    const angle = Math.random() * 90 - 45;
    const xPos = Math.random() * 40 - 20;
    const yPos = Math.random() * 40 - 20;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }

  render() {
    return (
      <img
        style={{ transform: this._transform }}
        className="Card"
        src={this.props.image}
        alt={this.props.alt}
      />
    );
  }
}

export default Card;
