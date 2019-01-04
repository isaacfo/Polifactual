
import React from 'react';

import Locals from './LocalComponent';
import States from './StateComponent';
import Nationals from './NationalComponent';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';



//stateless function component - arrow function 
//component render only static content vs stateful/changing content

const Profile = ({ match }) => {
    return (
<div>
  <div className="">
      <h1 className="">Pages</h1>
  </div>
  <div className="">
    <ul>
      <li><Link to={`${match.url}/html`}>HTML</Link></li>
      <li><Link to={`${match.url}/css`}>CSS</Link></li>
      <li><Link to={`${match.url}/react`}>React</Link></li>
    </ul>
  </div>
  <div className="">
    <Route path={`${match.path}/html`} render={() => { return <h1>HTML</h1> }}/>
    <Route path={`${match.path}/css`} render={() => { return <h1>CSS</h1> }}/>
    <Route path={`${match.path}/react`} render={() => { return <h1>React</h1> }}/>
  </div>
</div>
    );
}

export default Profile;