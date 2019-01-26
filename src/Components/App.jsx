import React from "react";
import GameBoard from "./GameBoard.jsx";
import "../index.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: 2,
      players: 1,
      board: null,
      gridLength: 10,
      gridHeight: 10
    };
  }

  render() {
    return (
      <div>
        <GameBoard />
      </div>
    );
  }
}
