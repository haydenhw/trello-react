import React, {Component} from "react";
import Card from "./Card";

class List extends Component {
  render() {
    const {cards, title} = this.props;
    return (
      <section className="List">
        <header className="List-header">
          <h2>{title}</h2>
        </header>
        <div className="List-cards">
          {
            cards.map((card) => {
              return <Card title={card.title} body={card.body} />
            })
          }
          <button type="button" className="List-add-button">
            + Add Random Card
          </button>
        </div>
      </section>
    );
  }
}

export default List;
