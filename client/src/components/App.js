import React, { Component } from "react";
import "../styles/App.css";
import NavbarPage from './Header';
import FooterPage from './Footer';
import Main from './MainComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="App bg">
            <NavbarPage/>
            <Main />
            <FooterPage />
        </div>
    );
  }
}

export default App;
