import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import Home from './HomeComponent';
import Profile from './ProfileComponent';




//import route Components 
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import Signup from './Signup';


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
                <a href="/Profile">Profile</a>
              </li>
            </ul>

            <hr />

           <Switch>
              
              <Route exact path="/" component={Home} />
              <Route exact path="/Signup" component={Signup} />
              <Route path="/Profile" component={Profile} />
            </Switch> 
          </div>


        </div>
      </Router>
    );
  }
}

export default App;
