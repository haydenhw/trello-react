import React, {Component} from "react";
import "./style.css";
import List from "../List";
import store from "../store";

class App extends Component {
  render() {
    const lists = store.lists.map((list) => {
      const cards = list.cardIds.map(c => store.allCards[c.id]);
      return <List cards={cards} title={list.header}/>
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

