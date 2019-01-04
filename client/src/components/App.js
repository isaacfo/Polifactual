import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import Login from './Login'
import Register from './Register'
import Local from './LocalComponent';
import State from './StateComponent';
import National from './NationalComponent';
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
                <a href="/">Login</a>
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
              <Route exact path="/" component={Login} />
              <Route path="/Register" component={Register}/>
                
            </Switch> 
          </div>


        </div>
      </Router>
    );
  }
}

export default App;
