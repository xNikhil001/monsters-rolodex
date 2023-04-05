import React, { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css'

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster)=> <Card key={monster.id} monster={monster} />)}
      </div>
    );
  }
}
