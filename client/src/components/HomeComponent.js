
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';



//stateless function component - arrow function 
//component render only static content vs stateful/changing content

const Home = ({ match }) => {
    return (
<div>
   <div className="jumbotron">
        <h1 className="display-3">Welcome</h1>
   </div>
  
</div>
    );
}

export default Home;