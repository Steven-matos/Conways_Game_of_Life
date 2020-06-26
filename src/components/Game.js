import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import "../styles/index.css";

import Controls from "./Controls";
import GridControls from "./GridControls";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];
const generateEmptyGrid = (numCols, numRows) => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }

  return rows;
};

const Game = () => {
  const [size, setSize] = useState([15, 15]);
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid(size[0], size[1]);
  });
  let [generations, setGenerations] = useState(0);
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        setGenerations(generations++);
        for (let i = 0; i < size[0]; i++) {
          for (let k = 0; k < size[1]; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < size[0] && newK >= 0 && newK < size[1]) {
                neighbors += g[newI][newK];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 100);
  }, [size, generations]);

  const startGame = () => {
    setRunning(!running);
    if (!running) {
      runningRef.current = true;
      runSimulation();
    }
  };

  const randomSet = () => {
    const rows = [];
    for (let i = 0; i < size[0]; i++) {
      rows.push(
        Array.from(Array(size[1]), () => (Math.random() > 0.7 ? 1 : 0))
      );
    }

    setGrid(rows);
  };

  const steps = () => {
    setGenerations(++generations);
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < size[0]; i++) {
          for (let k = 0; k < size[1]; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < size[0] && newK >= 0 && newK < size[1]) {
                neighbors += g[newI][newK];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });
  };

  const clearBoard = () => {
    setGrid(generateEmptyGrid(size[0], size[1]));
    setGenerations(0);
  };

  return (
    <div className="gameContainer">
      <span className="mobile-disclaimer">
        Disclaimer: On mobile max row and column size is 20 any more will
        display off screen!
      </span>
      <h1>Steven's Game Adaptation</h1>
      <GridControls
        size={size}
        setSize={setSize}
        running={running}
        generateEmptyGrid={generateEmptyGrid}
        setGrid={setGrid}
        generations={generations}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${size[1]}, 20px)`,
        }}
        className="boardContainer"
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? "red" : undefined,
                border: "solid 1px black",
              }}
            />
          ))
        )}
      </div>
      <Controls
        startGame={startGame}
        randomSet={randomSet}
        clearBoard={clearBoard}
        steps={steps}
        running={running}
      />
      <Button variant="contained" color="primary" endIcon={<HomeRoundedIcon />}>
        <Link to="/" className="homebtn">
          Back to Home
        </Link>
      </Button>
    </div>
  );
};

export default Game;
