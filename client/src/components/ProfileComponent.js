
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
      <li><Link to={`${match.url}/Local`}>Local</Link></li>
      <li><Link to={`${match.url}/State`}>State</Link></li>
      <li><Link to={`${match.url}/National`}>National</Link></li>
    </ul>
  </div>
  <div className="">
    <Route path={`${match.path}/Local`} component={Locals}/>
    <Route path={`${match.path}/State`} component={States}/>
    <Route path={`${match.path}/National`} component={Nationals}/>
  </div>
</div>
    );
}

export default Profile;