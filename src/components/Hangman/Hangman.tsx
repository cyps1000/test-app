import { Component } from "react";

/**
 * Imports Utils
 */
import { randomWord } from "../../utils";

/**
 * Imports styling
 */
import "./Hangman.css";

/**
 * Imports Images
 */
import img0 from "../../assets/images/0.jpg";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";

/**
 * Defines the props interface
 */
interface HangmanProps {
  maxWrong: number;
  images: string[];
}

/**
 * Defines the state interface
 */
interface HangmanState {
  nWrong: number;
  guessed: Set<string>;
  answer: string;
}

/**
 * Displays the component
 */
class Hangman extends Component<HangmanProps, HangmanState> {
  /**
   * Defines the default props
   */
  static defaultProps: HangmanProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  /**
   * Defines the default state
   */
  state: HangmanState = {
    nWrong: 0,
    guessed: new Set(),
    answer: randomWord()
  };

  /** Shows current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

  /** Handles a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess = (e: any) => {
    const letter = e.target.value;

    this.setState((state) => ({
      guessed: state.guessed.add(letter),
      nWrong: state.nWrong + (state.answer.includes(letter) ? 0 : 1)
    }));
  };

  /**
   * Returns an array of letter buttons to render
   */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  /**
   * Handles reseting the game
   */
  reset = () => {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord()
    });
  };

  render() {
    const gameOver = this.state.nWrong >= this.props.maxWrong;
    const altText = `${this.state.nWrong}/${this.props.maxWrong}`;
    const isWinner = this.guessedWord().join("") === this.state.answer;

    return (
      <div className="Hangman">
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={altText} />
        <p>Guessed Wrong: {this.state.nWrong}</p>
        <p className="Hangman-word">
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>
        {isWinner ? (
          <p>You win!</p>
        ) : (
          <div>
            <p className="Hangman-btns">
              {!gameOver ? this.generateButtons() : `You lose`}
            </p>
          </div>
        )}
        <button id="reset-btn" onClick={this.reset}>
          Restart?
        </button>
      </div>
    );
  }
}

export default Hangman;
