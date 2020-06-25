import React from "react";
import { Button } from "@material-ui/core";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import FlareIcon from "@material-ui/icons/Flare";
import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";

const Controls = (props) => {
  return (
    <div className="main-contorls">
      <Button
        variant="contained"
        color="primary"
        endIcon={props.running ? <StopRoundedIcon /> : <PlayArrowRoundedIcon />}
        onClick={props.startGame}
      >
        {props.running ? "Stop" : "Start"}
      </Button>
      <Button
        variant="contained"
        color="Primary"
        endIcon={<SkipNextRoundedIcon />}
        onClick={props.steps}
      >
        One Step
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
