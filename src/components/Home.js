/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Button } from "@material-ui/core";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import InfoIcon from "@material-ui/icons/Info";

const Home = () => {
  return (
    <div>
      <Particles
        id="tsparticles"
        height={736}
        params={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
                speed: 3,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="mainContainer">
        <header className="main-head">
          <h1>
            <span role="img">🦠</span> Conway's Game of Life{" "}
            <span role="img">🦠</span>
          </h1>
          <p>
            By:{" "}
            <a
              href="https://github.com/Steven-matos"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              className="info-link"
            >
              Steven Matos
            </a>
          </p>
        </header>

        <section className="about-section">
          <h2>About</h2>
          <p>
            The Game of Life is a{" "}
            <a
              className="about-links"
              href="https://en.wikipedia.org/wiki/Cellular_automaton"
              target="_blank"
            >
              cellular automation
            </a>{" "}
            created by{" "}
            <a
              className="about-links"
              href="https://en.wikipedia.org/wiki/John_Horton_Conway"
              target="_blank"
            >
              John Horton Conway
            </a>{" "}
            in 1970. Although it is called a game, it actually has zero players.
            The player only participates in setting the initial state, and the
            evolution of the patterns begins moving forward. The general setup
            is a grid with cells showing as 'alive' or 'dead'.
          </p>
          <Button
            variant="contained"
            color="primary"
            endIcon={<InfoIcon />}
            target="_blank"
            href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
          >
            Wiki Link
          </Button>
        </section>
        <section className="rules-section">
          <h2>Rules of the Game</h2>
          <ol>
            <li>
              Any live cell with fewer than 2 live neighbors dies, as if by
              underpopulation.
            </li>
            <li>
              Any live cell with 2 or 3 live neighbors lives on to the next
              generation.
            </li>
            <li>
              Any live cell with more than 3 live neighbors dies, as if by
              overpopulation.
            </li>
            <li>
              Any dead cell with exactly 3 live neighbors becomes a live cell,
              as if by reproduction.
            </li>
          </ol>
          <Button
            variant="contained"
            color="primary"
            endIcon={<SportsEsportsIcon />}
          >
            <Link className="gamebtn" to="/game">
              Play Game
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Home;
