import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  renderTweet = (event) => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(event) => this.renderTweet(event)}  type="text" name="message" id="message" value={this.state.tweet}/>
        <p>You have {this.props.maxChars - this.state.tweet.length} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
