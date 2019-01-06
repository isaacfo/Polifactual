import React, { Component } from "react";
import "../styles/App.css";
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="App">
            <Header />
            <Footer />
        </div>
    );
  }
}

export default App;
