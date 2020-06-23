import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

import Board from "./Board.js";

const GridControls = () => {
  const [size, setSize] = useState([50, 50]);
  const handleRowChange = (e) => {};

  const handleColumnChange = (e) => {};
  return (
    <div className="gridControls">
      <form>
        <TextField
          id="row"
          label="Row"
          variant="outlined"
          value={size[0]}
          onChange={handleRowChange}
        />
        <p>X</p>
        <div className="column">
          <TextField
            id="column"
            label="Column"
            variant="outlined"
            value={size[1]}
            onChange={handleColumnChange}
          />
        </div>
      </form>

      <h2>Generations: </h2>

      <div className="boardContainer">
        <Board boardSize={size} />
      </div>
    </div>
  );
};

export default GridControls;
