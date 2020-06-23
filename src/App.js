import React from "react";
import "./styles/index.css";

// Components
import Header from "./components/Header.js";
import GridControls from "./components/GridControls.js";
import Controls from "./components/Controls";

function App() {
  return (
    <div className="universeContainer">
      <Header />
      <GridControls />
      <Controls />
    </div>
  );
}

export default App;
