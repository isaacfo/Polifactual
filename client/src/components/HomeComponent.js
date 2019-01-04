
import React from 'react';

import Signup from './Signup';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';



//stateless function component - arrow function 
//component render only static content vs stateful/changing content

const Home = () => {
    return (
<div>
  <div className="">
      <h1 className="">Welcome! Please click the link below to sign in! </h1>
  </div>
  <div className="">
    <ul>
      <li><Link to={`/Signup`}>Signup/Login</Link></li>
    </ul>
  </div>
  <div className="">
    <Route path={`/Signup`} component={Signup} />

  </div>
</div>
    );
}

export default Home;