import React, { Component } from "react";
import Styles from '../styles/Footer.css';

//import route Components
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from "react-router-dom";
  

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

    render() {
        return (
            <div className="Footer">
                This is the footer.
            </div>
        );
    }
}

export default Footer;