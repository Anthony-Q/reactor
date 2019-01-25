import React from "react";
import "../index.scss";

export default function GameBoard(props) {
  const { gridLength, gridHeight } = props;
  return (
    <div className="gameboard">
      <div height={gridHeight} length={gridLength} />
    </div>
  );
}
