import React, { Component } from "react";
import "./App.css";
import NationalPoliticians from "./NationalPoliticians";
import StatePoliticians from "./StatePoliticians";
import LocalPoliticians from "./LocalPoliticians";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NationalPoliticians />
        <StatePoliticians />
        <LocalPoliticians />
      </div>
    );
  }
}

export default App;
