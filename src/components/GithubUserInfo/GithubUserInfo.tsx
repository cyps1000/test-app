import { Component } from "react";

/**
 * External Imports
 */
import axios from "axios";

/**
 * Imports styling
 */
import "./GithubUserInfo.css";

/**
 * Defines the props interface
 */
interface GithubUserInfoProps {
  username: string;
}

/**
 * Defines the state interface
 */
interface GithubUserInfoState {
  imgUrl: string;
  name: string;
}

/**
 * Displays the component
 */
class GithubUserInfo extends Component<
  GithubUserInfoProps,
  GithubUserInfoState
> {
  /**
   * Defines the default state
   */
  state: GithubUserInfoState = {
    imgUrl: "",
    name: ""
  };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.github.com/users/${this.props.username}`
    );
    this.setState({ imgUrl: data.avatar_url, name: data.name });
  }

  render() {
    return (
      <div>
        <h1>Github User: {this.state.name}</h1>
        <img className="Avatar" src={this.state.imgUrl} alt={this.state.name} />
      </div>
    );
  }
}

export default GithubUserInfo;
