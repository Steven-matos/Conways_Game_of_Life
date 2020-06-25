import React from "react";
import { Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import FlareIcon from "@material-ui/icons/Flare";

const Controls = (props) => {
  return (
    <div className="main-contorls">
      <Button
        variant="contained"
        color="primary"
        endIcon={props.running ? <StopIcon /> : <PlayArrowIcon />}
        onClick={props.startGame}
      >
        {props.running ? "Stop" : "Start"}
      </Button>
      <Button
        variant="contained"
        color="secondary"
        endIcon={<FlareIcon />}
        onClick={props.randomSet}
      >
        Random
      </Button>
      <Button
        variant="contained"
        color="secondary"
        endIcon={<ClearAllIcon />}
        onClick={props.clearBoard}
      >
        Clear
      </Button>
    </div>
  );
};

export default Controls;
