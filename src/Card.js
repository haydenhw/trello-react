import React, { Component } from "react";

class Card extends Component {
  render() {
    const {title, body, deleteCard, id} = this.props;
    return (
      <div className="Card">
        <button onClick={() => deleteCard(id)} type="button">delete</button>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default Card;
