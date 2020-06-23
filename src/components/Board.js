import React from "react";
import Cell from "./Cell.js";

const Board = ({ boardSize }) => {
  const renderBoard = () => {
    let universe = [];
    let cellRow = [];

    for (let i = 0; i < boardSize[0]; i++) {
      for (let j = 0; j < boardSize[1]; j++) {
        cellRow.push(<Cell key={[i, j]} />);
      }
      universe.push(
        <div className="row" key={i}>
          {cellRow}
        </div>
      );
      cellRow = [];
    }
    return universe;
  };

  return <div>{renderBoard()}</div>;
};

export default Board;
