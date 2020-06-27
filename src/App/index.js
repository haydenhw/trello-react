import React, {Component} from "react";
import "./style.css";
import List from "../List";
import store from "../store";

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends Component {
  state = {
    lists: store.lists,
    allCards: store.allCards
  }

  deleteCard = (deletedCardId)  => {
    const newLists = this.state.lists.map(list => {
      return {
        ...list,
        cardIds: list.cardIs.filter((id) => id !== deletedCardId )
      }
    });
    const newCards = omit(this.state.allCards, deletedCardId)

    this.setState({
      lists: newLists,
      allCards: newCards,
    })
  }

  addCard = (listId) => {
    const newCard = newRandomCard();
    const newCardId = newCard.id;

    const newLists = this.state.lists.map((list) => {
      return {
        ...list,
        cardIds: listId === list.id ? [...list.cardIds, newCardId] : list.cardIds
      }
    })

    const newCards = [...this.state.cards, newCard]

      this.setState({
        lists: newLists,
        cards: newCards,
    })
  }

  render() {
    const lists = store.lists.map((list) => {
      const cards = list.cardIds.map(c => store.allCards[c.id]);
      return <List id={list.id} cards={cards} addCard={this.addCard} deleteCard={this.deleteCard} title={list.header}/>
    });

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {lists}
        </div>
      </main>
    )
  }
}

export default App;

