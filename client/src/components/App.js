import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import Home from './HomeComponent';
import Profile from './ProfileComponent';
import Signup_Login from './Signup_Login';



//import route Components 
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

  render() {
    return (

      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Signup_login">Signup_Login</a>
              </li>
              <li>
                <a href="/Profile">Profile</a>
              </li>
            </ul>

            <hr />

           <Switch>
              
              <Route exact path="/" component={Home} />
              <Route path="/Signup_Login" component={Signup_Login} />
              <Route path="/Profile" component={Profile} />
            </Switch> 
          </div>


        </div>
      </Router>
    );
  }
}

export default App;
