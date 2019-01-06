import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import Local from "./LocalComponent";
import State from "./StateComponent";
import National from "./NationalComponent";
import Home from "./HomeComponent";
import Profile from "./ProfileComponent";
import Signup from "./Signup";
import Styles from '../styles/Header.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";
  

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

    render() {
        return (
            <Router>
                <div className="Header">
                    <h1 className="H1">Polifactual </h1>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>

                        <li>
                            <a href="/Profile">Profile</a>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Signup" component={Signup} />
                        <Route path="/Profile" component={Profile} />
                        <Route exact path="/" component={Login} />
                        <Route path="/Register" component={Register} />
                    </Switch>
                </div>  
            </Router>
        );
    }
}

export default Header;