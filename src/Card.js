import React, { Component } from "react";

class Card extends Component {
  render() {
    const {title, body} = this.props;
    return (
      <div className="Card">
        <button type="button">delete</button>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default Card;
