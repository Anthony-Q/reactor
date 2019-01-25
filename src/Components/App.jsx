import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: 2,
      players: 1,
      board: Array(20)
        .fill(0)
        .map(e => Array.fill("A"))
    };
    this.fillBoard = this.state.fillBoard.bind(this);
  }

  fillBoard() {
    const newBoard = Array(this.state.dimensions)
      .fill(0)
      .map(e => Array(this.state.dimensions).fill("A"));

    this.setState(prevState => {
      return { board: newBoard };
    });
  }

  render() {
    return <div>{this.fillBoard}</div>;
  }
}
