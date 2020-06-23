import React from "react";
import { Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";

const Controls = () => {
  const startGame = () => {};

  const stopGame = () => {};
  return (
    <div className="main-contorls">
      <Button
        variant="contained"
        color="primary"
        endIcon={<PlayArrowIcon />}
        onClick={startGame}
      >
        Start
      </Button>
      <Button
        variant="contained"
        color="secondary"
        endIcon={<StopIcon />}
        onClick={stopGame}
      >
        Stop
      </Button>
    </div>
  );
};

export default Controls;
