import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import Login from './Login'
import Register from './Register'
import Local from './LocalComponent';
import State from './StateComponent';
import National from './NationalComponent';
import Home from './HomeComponent';

//import route Components 
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'


class App extends Component {

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
                <a href="/Locals">Local</a>
              </li>
              <li>
                <a href="/States">State</a>
              </li>
              <li>
                <a href="/Nationals">National</a>
              </li>
            </ul>

            <hr />

           <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/Register" component={Register}/>
              <Route path='/Home' component={Home}/>
              <Route path="/Locals" component={Local} />
              <Route path="/States" component={State} />
              <Route path="/Nationals" component={National} />   
            </Switch> 
          </div>


        </div>
      </Router>
    );
  }
}

export default App;
